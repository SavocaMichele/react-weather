import * as React from "react";

export type NewspaperIconProps = React.SVGProps<SVGSVGElement>;

const NewspaperIcon = React.forwardRef<SVGSVGElement, NewspaperIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="M13 15H8m7-3H8m-5.2 7h14.4a1.8 1.8 0 0 0 1.8-1.8V2.8A1.8 1.8 0 0 0 17.2 1H6.4a1.8 1.8 0 0 0-1.8 1.8v14.4A1.8 1.8 0 0 1 2.8 19m0 0A1.8 1.8 0 0 1 1 17.2V9.1a1.8 1.8 0 0 1 1.8-1.8h1.8"/><path d="M14.125 5h-5.25C8.392 5 8 5.336 8 5.75v1.5c0 .414.392.75.875.75h5.25c.483 0 .875-.336.875-.75v-1.5c0-.414-.392-.75-.875-.75"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

NewspaperIcon.displayName = "NewspaperIcon";
export default React.memo(NewspaperIcon);
