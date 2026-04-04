import * as React from "react";

export type ArrowShortDownIconProps = React.SVGProps<SVGSVGElement>;

const ArrowShortDownIcon = React.forwardRef<SVGSVGElement, ArrowShortDownIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 4.167v11.666M15.833 10 10 15.833 4.167 10"/>
    </svg>
  )
);

ArrowShortDownIcon.displayName = "ArrowShortDownIcon";
export default React.memo(ArrowShortDownIcon);
