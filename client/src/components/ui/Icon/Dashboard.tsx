import * as React from "react";

export type DashboardIconProps = React.SVGProps<SVGSVGElement>;

const DashboardIcon = React.forwardRef<SVGSVGElement, DashboardIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M7 1H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m11 0h-5c-.552 0-1 .358-1 .8v2.4c0 .442.448.8 1 .8h5c.552 0 1-.358 1-.8V1.8c0-.442-.448-.8-1-.8m0 9h-5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M7 14H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

DashboardIcon.displayName = "DashboardIcon";
export default React.memo(DashboardIcon);
