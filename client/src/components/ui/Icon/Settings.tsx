import * as React from "react";

export type SettingsIconProps = React.SVGProps<SVGSVGElement>;

const SettingsIcon = React.forwardRef<SVGSVGElement, SettingsIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M7.92 2.91c.049-.523.29-1.008.674-1.361a2.08 2.08 0 0 1 2.813 0c.384.353.625.838.674 1.36.03.338.14.664.32.95a2.076 2.076 0 0 0 2.645.778 2.07 2.07 0 0 1 1.502-.089c.494.16.912.5 1.172.954a2.127 2.127 0 0 1-.593 2.77 2.125 2.125 0 0 0 0 3.454 2.127 2.127 0 0 1 .593 2.77c-.26.455-.678.795-1.172.955s-1.03.128-1.502-.088a2.07 2.07 0 0 0-1.927.085 2.1 2.1 0 0 0-.718.693c-.18.285-.29.61-.32.948a2.12 2.12 0 0 1-.674 1.362 2.08 2.08 0 0 1-2.813 0 2.12 2.12 0 0 1-.674-1.362 2.12 2.12 0 0 0-1.038-1.642 2.08 2.08 0 0 0-1.928-.084 2.07 2.07 0 0 1-1.502.088c-.494-.16-.912-.5-1.172-.954a2.127 2.127 0 0 1 .593-2.77 2.125 2.125 0 0 0 0-3.454 2.127 2.127 0 0 1-.591-2.77 2.1 2.1 0 0 1 1.17-.953 2.07 2.07 0 0 1 1.501.086 2.07 2.07 0 0 0 1.927-.085 2.11 2.11 0 0 0 1.038-1.642"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  )
);

SettingsIcon.displayName = "SettingsIcon";
export default React.memo(SettingsIcon);
