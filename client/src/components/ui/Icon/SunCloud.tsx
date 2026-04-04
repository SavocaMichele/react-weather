import * as React from "react";

export type SunCloudIconProps = React.SVGProps<SVGSVGElement>;

const SunCloudIcon = React.forwardRef<SVGSVGElement, SunCloudIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 1.667v1.666m-5.892.775 1.175 1.175M16.667 10h1.666m-2.441-5.892-1.175 1.175m-1.427 5.259a3.334 3.334 0 0 0-4.938-3.44m2.481 11.231h-5a4.166 4.166 0 1 1 4.084-5h.916a2.5 2.5 0 1 1 0 5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SunCloudIcon.displayName = "SunCloudIcon";
export default React.memo(SunCloudIcon);
