import * as React from "react";

export type HeartIconProps = React.SVGProps<SVGSVGElement>;

const HeartIcon = React.forwardRef<SVGSVGElement, HeartIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M1 7.863c0-.981.304-1.94.871-2.747a4.93 4.93 0 0 1 2.307-1.78 5.05 5.05 0 0 1 2.931-.187 4.97 4.97 0 0 1 2.523 1.473.5.5 0 0 0 .368.157.5.5 0 0 0 .368-.157 4.96 4.96 0 0 1 2.522-1.485c.976-.232 2-.168 2.937.184a4.93 4.93 0 0 1 2.31 1.786A4.77 4.77 0 0 1 19 7.863c0 2.018-1.35 3.526-2.7 4.848l-4.943 4.684c-.167.188-.374.34-.606.444a1.83 1.83 0 0 1-2.094-.428l-4.957-4.7C2.35 11.39 1 9.891 1 7.863"/>
    </svg>
  )
);

HeartIcon.displayName = "HeartIcon";
export default React.memo(HeartIcon);
