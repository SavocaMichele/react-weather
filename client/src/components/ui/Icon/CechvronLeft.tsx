import * as React from "react";

export type CechvronLeftIconProps = React.SVGProps<SVGSVGElement>;

const CechvronLeftIcon = React.forwardRef<SVGSVGElement, CechvronLeftIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m12.5 15-5-5 5-5"/>
    </svg>
  )
);

CechvronLeftIcon.displayName = "CechvronLeftIcon";
export default React.memo(CechvronLeftIcon);
