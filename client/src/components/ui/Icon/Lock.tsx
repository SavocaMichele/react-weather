import * as React from "react";

export type LockIconProps = React.SVGProps<SVGSVGElement>;

const LockIcon = React.forwardRef<SVGSVGElement, LockIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M16.222 9H3.778C2.796 9 2 9.814 2 10.818v6.364C2 18.186 2.796 19 3.778 19h12.444c.982 0 1.778-.814 1.778-1.818v-6.364C18 9.814 17.204 9 16.222 9M6 9V5.444c0-1.178.474-2.309 1.318-3.142A4.53 4.53 0 0 1 10.5 1c1.194 0 2.338.468 3.182 1.302A4.42 4.42 0 0 1 15 5.444V9"/>
    </svg>
  )
);

LockIcon.displayName = "LockIcon";
export default React.memo(LockIcon);
