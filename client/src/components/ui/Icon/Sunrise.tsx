import * as React from "react";

export type SunriseIconProps = React.SVGProps<SVGSVGElement>;

const SunriseIcon = React.forwardRef<SVGSVGElement, SunriseIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 1.667v6.666m-5.892.775 1.175 1.175M1.667 15h1.666m13.334 0h1.666m-2.441-5.892-1.175 1.175m3.616 8.05H1.667M6.667 5 10 1.667 13.333 5m0 10a3.333 3.333 0 0 0-6.666 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SunriseIcon.displayName = "SunriseIcon";
export default React.memo(SunriseIcon);
