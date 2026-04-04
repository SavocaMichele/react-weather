import * as React from "react";

export type CloudsIconProps = React.SVGProps<SVGSVGElement>;

const CloudsIcon = React.forwardRef<SVGSVGElement, CloudsIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M14.583 10a3.75 3.75 0 1 1 0 7.5H7.505A5.834 5.834 0 1 1 13.09 10z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M18.193 7.5a2.5 2.5 0 0 0-2.36-1.667h-1.839a4.583 4.583 0 0 0-8.933.509"/>
    </svg>
  )
);

CloudsIcon.displayName = "CloudsIcon";
export default React.memo(CloudsIcon);
