import * as React from "react";

export type CloudIconProps = React.SVGProps<SVGSVGElement>;

const CloudIcon = React.forwardRef<SVGSVGElement, CloudIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M14.583 15.833H7.5a5.833 5.833 0 1 1 5.592-7.5h1.491a3.75 3.75 0 1 1 0 7.5"/>
    </svg>
  )
);

CloudIcon.displayName = "CloudIcon";
export default React.memo(CloudIcon);
