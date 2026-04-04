import * as React from "react";

export type SnowIconProps = React.SVGProps<SVGSVGElement>;

const SnowIcon = React.forwardRef<SVGSVGElement, SnowIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m8.333 16.667-1.041-2.084L5 15M8.333 3.333 7.292 5.417 5 5m6.667 11.667 1.041-2.084L15 15M11.667 3.333l1.041 2.084L15 5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m14.167 17.5-2.5-5H8.333m5.834-10-2.5 5 1.25 2.5m-11.25 0h5.416l1.25-2.5m8.334.833L15.417 10l1.25 1.667"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M18.333 10h-5.416l-1.25 2.5M3.333 8.333 4.583 10l-1.25 1.667m2.5 5.833 2.5-5-1.25-2.5m-1.25-7.5 2.5 5h3.334"/>
    </svg>
  )
);

SnowIcon.displayName = "SnowIcon";
export default React.memo(SnowIcon);
