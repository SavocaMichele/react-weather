import * as React from "react";

export type AlertIconProps = React.SVGProps<SVGSVGElement>;

const AlertIcon = React.forwardRef<SVGSVGElement, AlertIconProps>(
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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" d="M18.759 15.335 11.565 2.901a1.8 1.8 0 0 0-.66-.66 1.816 1.816 0 0 0-2.47.66L1.241 15.335a1.76 1.76 0 0 0 .669 2.433c.275.155.588.235.905.232h14.388c.316 0 .626-.083.899-.239s.5-.38.657-.65a1.76 1.76 0 0 0 0-1.776M10 7.5v3.333m0 3.334h.008"/>
    </svg>
  )
);

AlertIcon.displayName = "AlertIcon";
export default React.memo(AlertIcon);
