import * as React from "react";

export type DropletsIconProps = React.SVGProps<SVGSVGElement>;

const DropletsIcon = React.forwardRef<SVGSVGElement, DropletsIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M5.833 13.583c1.834 0 3.334-1.525 3.334-3.375 0-.966-.475-1.883-1.425-2.658S6.075 5.625 5.833 4.417A5.5 5.5 0 0 1 3.925 7.55c-.958.767-1.425 1.7-1.425 2.658 0 1.85 1.5 3.375 3.333 3.375"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10.467 5.5a9.1 9.1 0 0 0 1.2-2.983C12.083 4.6 13.333 6.6 15 7.933s2.5 2.917 2.5 4.584a5.816 5.816 0 0 1-9.925 4.141"/>
    </svg>
  )
);

DropletsIcon.displayName = "DropletsIcon";
export default React.memo(DropletsIcon);
