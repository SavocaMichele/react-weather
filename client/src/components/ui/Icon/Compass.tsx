import * as React from "react";

export type CompassIconProps = React.SVGProps<SVGSVGElement>;

const CompassIcon = React.forwardRef<SVGSVGElement, CompassIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/><path d="m14 6-1.702 5.105a1.89 1.89 0 0 1-1.193 1.193L6 14l1.702-5.105a1.89 1.89 0 0 1 1.193-1.193z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

CompassIcon.displayName = "CompassIcon";
export default React.memo(CompassIcon);
