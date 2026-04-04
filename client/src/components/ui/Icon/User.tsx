import * as React from "react";

export type UserIconProps = React.SVGProps<SVGSVGElement>;

const UserIcon = React.forwardRef<SVGSVGElement, UserIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M17 19v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
    </svg>
  )
);

UserIcon.displayName = "UserIcon";
export default React.memo(UserIcon);
