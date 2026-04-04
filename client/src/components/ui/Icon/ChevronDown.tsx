import * as React from "react";

export type ChevronDownIconProps = React.SVGProps<SVGSVGElement>;

const ChevronDownIcon = React.forwardRef<SVGSVGElement, ChevronDownIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m5 7.5 5 5 5-5"/>
    </svg>
  )
);

ChevronDownIcon.displayName = "ChevronDownIcon";
export default React.memo(ChevronDownIcon);
