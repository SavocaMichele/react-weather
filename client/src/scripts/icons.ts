// @ts-ignore
import fs from "fs/promises";
// @ts-ignore
import path from "path";
import { optimize } from "svgo";
// @ts-ignore
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FOLDER = path.join(__dirname, "../assets/icons");
const OUTPUT_FOLDER = path.join(__dirname, "../components/ui/Icon");

await fs.mkdir(OUTPUT_FOLDER, { recursive: true });

const toPascalCase = (str: string) =>
    str
        .replace(/[-_](.)/g, (_: string, char: string) => char.toUpperCase())
        .replace(/^(.)/, (_: string, char: string) => char.toUpperCase());

const svgAttrToReactMap: Record<string, string> = {
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-width": "strokeWidth",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    "shape-rendering": "shapeRendering",
    "text-anchor": "textAnchor",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "color-interpolation-filters": "colorInterpolationFilters",
    "xlink:href": "xlinkHref",
    "xmlns:xlink": "xmlnsXlink",
    "xml:space": "xmlSpace",
};

const toReactSvgAttributes = (svg: string) => {
    let out = svg;
    for (const [dash, camel] of Object.entries(svgAttrToReactMap)) {
        // Replace attribute names only when used as attributes (preceded by whitespace)
        const re = new RegExp(`\\s${dash}=`, "g");
        out = out.replace(re, ` ${camel}=`);
    }
    return out;
};

const convertSvgToReactComponents = async () => {
    const files = (await fs.readdir(INPUT_FOLDER)).filter((f: any) => f.endsWith(".svg"));

    for (const file of files) {
        const filePath = path.join(INPUT_FOLDER, file);
        const svgContent = await fs.readFile(filePath, "utf-8");

        const result = optimize(svgContent, { path: filePath, multipass: true });
        if (!("data" in result)) {
            console.error(`SVGO failed for ${file}`);
            continue;
        }

        let optimizedSvg = (result as { data: string }).data;

        // Convert SVG attributes to React camelCase
        optimizedSvg = toReactSvgAttributes(optimizedSvg);

        // Extract everything inside the <svg>...</svg> (inner markup)
        const innerSvgMatch = optimizedSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
        if (!innerSvgMatch) {
            console.error(`No <svg> tag found in ${file}`);
            continue;
        }

        const innerSvgContent = innerSvgMatch[1]!
        // Remove empty background rectangles like M0 0h24v24H0z if present
    .replace(/<path[^>]*d="M0 0h24v24H0z"[^>]*\/>/gi, "")
            // Remove stroke attributes to allow currentColor to work
            .replace(/\sstroke="[^"]*"/gi, "")
            .trim();

        if (!innerSvgContent) {
            console.error(`No visible SVG content for ${file}, skipping.`);
            continue;
        }


        const baseName = path.basename(file, ".svg").replace(/\s+/g, "");
        const componentName = toPascalCase(baseName);

        const componentContent = `
import * as React from "react";

export type ${componentName}IconProps = React.SVGProps<SVGSVGElement>;

const ${componentName}Icon = React.forwardRef<SVGSVGElement, ${componentName}IconProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
${innerSvgContent.split("\n").map((l) => "      " + l).join("\n")}
    </svg>
  )
);

${componentName}Icon.displayName = "${componentName}Icon";
export default React.memo(${componentName}Icon);
`.trimStart();

        await fs.writeFile(path.join(OUTPUT_FOLDER, `${componentName}.tsx`), componentContent);
        console.log(`Converted ${file} -> ${componentName}.tsx`);
    }
};

await convertSvgToReactComponents();

const generateIconNames = async () => {
    const ICONS_FOLDER = OUTPUT_FOLDER;
    const ICONNAMES_FILE = path.join(ICONS_FOLDER, "iconNames.ts");

    const files = (await fs.readdir(ICONS_FOLDER))
        .filter((file: any) => file.endsWith(".tsx"))
        .map((file: any) => path.basename(file, ".tsx"))
        .sort();

    const typeDefinition = `// This file is auto-generated. Do not edit manually.
export type IconName = ${files.map((name: any) => `"${name}"`).join(" | ")};
`;

    await fs.writeFile(ICONNAMES_FILE, typeDefinition);
    console.log("Icon names type generated successfully!");
};

await generateIconNames();

const generateIndex = async () => {
    const ICONS_FOLDER = OUTPUT_FOLDER;
    const INDEX_FILE = path.join(ICONS_FOLDER, "index.tsx");
    const EXCLUDE_FILES = ["index.tsx", "Icon.tsx"];

    const files = (await fs.readdir(ICONS_FOLDER)).filter(
        (file: any) => file.endsWith(".tsx") && !EXCLUDE_FILES.includes(file)
    );

    const imports = files
        .map((file: any) => {
            const name = path.basename(file, ".tsx");
            return `import ${name} from "./${name}";`;
        })
        .join("\n");

    const exportMap = files
        .map((file: any) => {
            const name = path.basename(file, ".tsx");
            return `  "${name}": ${name},`;
        })
        .join("\n");

    const content = `
import * as React from "react";
${imports}

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
${exportMap}
};

export default iconMap;
`.trimStart();

    await fs.writeFile(INDEX_FILE, content);
    console.log("Generated index.tsx for React icons.");
};

await generateIndex();
