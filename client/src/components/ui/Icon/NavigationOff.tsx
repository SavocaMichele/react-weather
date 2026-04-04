import * as React from "react";

export type NavigationOffIconProps = React.SVGProps<SVGSVGElement>;

const NavigationOffIcon = React.forwardRef<SVGSVGElement, NavigationOffIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M7.025 7.025 2.5 9.167l6.667 1.666 1.666 6.667 2.142-4.525m1.517-3.2 3.841-8.108-8.108 3.841M1.667 1.667l16.666 16.666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

NavigationOffIcon.displayName = "NavigationOffIcon";
export default React.memo(NavigationOffIcon);
