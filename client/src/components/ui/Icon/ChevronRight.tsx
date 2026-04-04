import * as React from "react";

export type ChevronRightIconProps = React.SVGProps<SVGSVGElement>;

const ChevronRightIcon = React.forwardRef<SVGSVGElement, ChevronRightIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m7.5 15 5-5-5-5"/>
    </svg>
  )
);

ChevronRightIcon.displayName = "ChevronRightIcon";
export default React.memo(ChevronRightIcon);
