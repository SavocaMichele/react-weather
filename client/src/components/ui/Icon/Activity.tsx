import * as React from "react";

export type ActivityIconProps = React.SVGProps<SVGSVGElement>;

const ActivityIcon = React.forwardRef<SVGSVGElement, ActivityIconProps>(
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
      <g clipPath="url(#a)"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M18.333 10h-2.066a1.67 1.67 0 0 0-1.609 1.217L12.7 18.183a.208.208 0 0 1-.4 0L7.7 1.817a.208.208 0 0 0-.4 0L5.342 8.783A1.67 1.67 0 0 1 3.742 10H1.667"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

ActivityIcon.displayName = "ActivityIcon";
export default React.memo(ActivityIcon);
