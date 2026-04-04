import * as React from "react";

export type ChevronUpIconProps = React.SVGProps<SVGSVGElement>;

const ChevronUpIcon = React.forwardRef<SVGSVGElement, ChevronUpIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m15 12.5-5-5-5 5"/>
    </svg>
  )
);

ChevronUpIcon.displayName = "ChevronUpIcon";
export default React.memo(ChevronUpIcon);
