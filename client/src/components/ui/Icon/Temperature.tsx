import * as React from "react";

export type TemperatureIconProps = React.SVGProps<SVGSVGElement>;

const TemperatureIcon = React.forwardRef<SVGSVGElement, TemperatureIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M11.667 3.333v8.784a3.333 3.333 0 1 1-3.334 0V3.333a1.667 1.667 0 1 1 3.334 0"/>
    </svg>
  )
);

TemperatureIcon.displayName = "TemperatureIcon";
export default React.memo(TemperatureIcon);
