import * as React from "react";

export type SunRainIconProps = React.SVGProps<SVGSVGElement>;

const SunRainIcon = React.forwardRef<SVGSVGElement, SunRainIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 1.667v1.666m-5.892.775 1.175 1.175M16.667 10h1.666m-2.441-5.892-1.175 1.175m-1.427 5.259a3.334 3.334 0 0 0-4.938-3.44M2.5 16.667a4.167 4.167 0 1 1 7.417-3.334h.916A2.5 2.5 0 0 1 12.5 17.7m-3.333-1.033v1.666m-3.334-2.5V17.5"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SunRainIcon.displayName = "SunRainIcon";
export default React.memo(SunRainIcon);
