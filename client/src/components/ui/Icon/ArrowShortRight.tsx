import * as React from "react";

export type ArrowShortRightIconProps = React.SVGProps<SVGSVGElement>;

const ArrowShortRightIcon = React.forwardRef<SVGSVGElement, ArrowShortRightIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"/>
    </svg>
  )
);

ArrowShortRightIcon.displayName = "ArrowShortRightIcon";
export default React.memo(ArrowShortRightIcon);
