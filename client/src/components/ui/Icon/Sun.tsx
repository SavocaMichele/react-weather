import * as React from "react";

export type SunIconProps = React.SVGProps<SVGSVGElement>;

const SunIcon = React.forwardRef<SVGSVGElement, SunIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 13.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666M10 2.5v.833m0 13.334v.833M2.5 10h.833m13.334 0h.833m-2.197-5.303-.589.589m-9.428 9.428-.59.59m.001-10.607.589.589m9.428 9.428.59.59"/>
    </svg>
  )
);

SunIcon.displayName = "SunIcon";
export default React.memo(SunIcon);
