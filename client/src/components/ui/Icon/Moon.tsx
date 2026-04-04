import * as React from "react";

export type MoonIconProps = React.SVGProps<SVGSVGElement>;

const MoonIcon = React.forwardRef<SVGSVGElement, MoonIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M15 4.167h3.333M16.667 2.5v3.333m.821 4.572a7.5 7.5 0 1 1-7.895-7.893c.338-.019.515.383.335.669a5 5 0 0 0 6.89 6.89c.287-.18.688-.003.67.334"/>
    </svg>
  )
);

MoonIcon.displayName = "MoonIcon";
export default React.memo(MoonIcon);
