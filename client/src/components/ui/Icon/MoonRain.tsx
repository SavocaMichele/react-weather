import * as React from "react";

export type MoonRainIconProps = React.SVGProps<SVGSVGElement>;

const MoonRainIcon = React.forwardRef<SVGSVGElement, MoonRainIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M9.167 16.667v1.666m6.146-6.24a5 5 0 0 0 2.885-3.439c.123-.52-.55-.808-1.04-.595a3.333 3.333 0 0 1-4.383-4.383c.213-.491-.075-1.163-.597-1.04A5 5 0 0 0 8.35 7.103M2.5 16.667a4.167 4.167 0 1 1 7.417-3.334h.916A2.5 2.5 0 0 1 12.5 17.7m-6.667-1.867V17.5"/>
    </svg>
  )
);

MoonRainIcon.displayName = "MoonRainIcon";
export default React.memo(MoonRainIcon);
