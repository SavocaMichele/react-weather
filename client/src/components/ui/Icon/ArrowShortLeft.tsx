import * as React from "react";

export type ArrowShortLeftIconProps = React.SVGProps<SVGSVGElement>;

const ArrowShortLeftIcon = React.forwardRef<SVGSVGElement, ArrowShortLeftIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 15.833 4.167 10 10 4.167M15.833 10H4.167"/>
    </svg>
  )
);

ArrowShortLeftIcon.displayName = "ArrowShortLeftIcon";
export default React.memo(ArrowShortLeftIcon);
