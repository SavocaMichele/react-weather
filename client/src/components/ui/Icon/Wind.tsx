import * as React from "react";

export type WindIconProps = React.SVGProps<SVGSVGElement>;

const WindIcon = React.forwardRef<SVGSVGElement, WindIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10.667 16.333a1.666 1.666 0 1 0 1-3h-10m12.916-6.666A2.083 2.083 0 1 1 16.25 10H1.667m6.5-6.333a1.667 1.667 0 1 1 1 3h-7.5"/>
    </svg>
  )
);

WindIcon.displayName = "WindIcon";
export default React.memo(WindIcon);
