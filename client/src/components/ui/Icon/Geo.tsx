import * as React from "react";

export type GeoIconProps = React.SVGProps<SVGSVGElement>;

const GeoIcon = React.forwardRef<SVGSVGElement, GeoIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M17 8.2c0 4.494-4.847 9.174-6.474 10.62a.86.86 0 0 1-1.052 0C7.847 17.373 3 12.693 3 8.2c0-1.91.737-3.74 2.05-5.091A6.9 6.9 0 0 1 10 1c1.857 0 3.637.759 4.95 2.109A7.3 7.3 0 0 1 17 8.2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 11c1.657 0 3-1.12 3-2.5S11.657 6 10 6 7 7.12 7 8.5 8.343 11 10 11"/>
    </svg>
  )
);

GeoIcon.displayName = "GeoIcon";
export default React.memo(GeoIcon);
