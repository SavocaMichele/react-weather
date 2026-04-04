import * as React from "react";

export type RainIconProps = React.SVGProps<SVGSVGElement>;

const RainIcon = React.forwardRef<SVGSVGElement, RainIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M3.333 12.416a5.833 5.833 0 1 1 9.759-5.75h1.491a3.75 3.75 0 0 1 2.084 6.869m-9 4.798 2.5-5.833M7.5 10.833 5 16.667m9.167-5.834-2.5 5.834"/>
    </svg>
  )
);

RainIcon.displayName = "RainIcon";
export default React.memo(RainIcon);
