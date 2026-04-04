import * as React from "react";

export type ArrowShortUpIconProps = React.SVGProps<SVGSVGElement>;

const ArrowShortUpIcon = React.forwardRef<SVGSVGElement, ArrowShortUpIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M4.167 10 10 4.167 15.833 10M10 15.833V4.167"/>
    </svg>
  )
);

ArrowShortUpIcon.displayName = "ArrowShortUpIcon";
export default React.memo(ArrowShortUpIcon);
