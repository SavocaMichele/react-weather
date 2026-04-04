import * as React from "react";

export type RainbowIconProps = React.SVGProps<SVGSVGElement>;

const RainbowIcon = React.forwardRef<SVGSVGElement, RainbowIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M18.333 14.167a8.333 8.333 0 1 0-16.666 0"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M5 14.167a5 5 0 1 1 10 0"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M8.333 14.167a1.666 1.666 0 1 1 3.334 0"/>
    </svg>
  )
);

RainbowIcon.displayName = "RainbowIcon";
export default React.memo(RainbowIcon);
