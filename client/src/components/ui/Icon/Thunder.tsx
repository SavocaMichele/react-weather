import * as React from "react";

export type ThunderIconProps = React.SVGProps<SVGSVGElement>;

const ThunderIcon = React.forwardRef<SVGSVGElement, ThunderIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M5 13.605a5.834 5.834 0 1 1 8.092-6.938h1.491A3.75 3.75 0 0 1 15 14.144"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m10.833 10-2.5 4.167h3.334l-2.5 4.166"/>
    </svg>
  )
);

ThunderIcon.displayName = "ThunderIcon";
export default React.memo(ThunderIcon);
