import * as React from "react";

export type SunsetIconProps = React.SVGProps<SVGSVGElement>;

const SunsetIcon = React.forwardRef<SVGSVGElement, SunsetIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 8.333V1.667M4.108 9.108l1.175 1.175M1.667 15h1.666m13.334 0h1.666m-2.441-5.892-1.175 1.175m3.616 8.05H1.667M13.333 5 10 8.333 6.667 5m6.666 10a3.333 3.333 0 0 0-6.666 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SunsetIcon.displayName = "SunsetIcon";
export default React.memo(SunsetIcon);
