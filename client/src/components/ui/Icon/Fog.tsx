import * as React from "react";

export type FogIconProps = React.SVGProps<SVGSVGElement>;

const FogIcon = React.forwardRef<SVGSVGElement, FogIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M3.333 12.416a5.833 5.833 0 1 1 9.759-5.75h1.491a3.75 3.75 0 0 1 2.084 6.869m-3.334.632h-7.5m8.334 3.333H7.5"/>
    </svg>
  )
);

FogIcon.displayName = "FogIcon";
export default React.memo(FogIcon);
