import * as React from "react";

export type VisibilityIconProps = React.SVGProps<SVGSVGElement>;

const VisibilityIcon = React.forwardRef<SVGSVGElement, VisibilityIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M1.718 10.29a.83.83 0 0 1 0-.58 8.958 8.958 0 0 1 16.564 0c.07.187.07.393 0 .58a8.958 8.958 0 0 1-16.564 0"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
    </svg>
  )
);

VisibilityIcon.displayName = "VisibilityIcon";
export default React.memo(VisibilityIcon);
