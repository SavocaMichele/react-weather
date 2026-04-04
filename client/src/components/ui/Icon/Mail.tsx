import * as React from "react";

export type MailIconProps = React.SVGProps<SVGSVGElement>;

const MailIcon = React.forwardRef<SVGSVGElement, MailIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="m19 5-8.092 5.73c-.274.177-.586.27-.904.27-.317 0-.63-.093-.904-.27L1 5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M17.2 3H2.8C1.806 3 1 3.784 1 4.75v10.5c0 .966.806 1.75 1.8 1.75h14.4c.994 0 1.8-.784 1.8-1.75V4.75C19 3.784 18.194 3 17.2 3"/>
    </svg>
  )
);

MailIcon.displayName = "MailIcon";
export default React.memo(MailIcon);
