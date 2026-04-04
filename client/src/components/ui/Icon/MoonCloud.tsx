import * as React from "react";

export type MoonCloudIconProps = React.SVGProps<SVGSVGElement>;

const MoonCloudIcon = React.forwardRef<SVGSVGElement, MoonCloudIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10.833 13.333a2.5 2.5 0 1 1 0 5h-5a4.166 4.166 0 1 1 4.084-5zm4.48-1.24a5 5 0 0 0 2.885-3.439c.123-.52-.55-.808-1.04-.595a3.333 3.333 0 0 1-4.383-4.383c.213-.491-.075-1.163-.597-1.04A5 5 0 0 0 8.35 7.103"/>
    </svg>
  )
);

MoonCloudIcon.displayName = "MoonCloudIcon";
export default React.memo(MoonCloudIcon);
