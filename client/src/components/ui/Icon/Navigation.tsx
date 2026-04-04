import * as React from "react";

export type NavigationIconProps = React.SVGProps<SVGSVGElement>;

const NavigationIcon = React.forwardRef<SVGSVGElement, NavigationIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m2.5 9.167 15.833-7.5-7.5 15.833-1.666-6.667z"/>
    </svg>
  )
);

NavigationIcon.displayName = "NavigationIcon";
export default React.memo(NavigationIcon);
