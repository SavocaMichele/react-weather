import * as React from "react";

export type SearchIconProps = React.SVGProps<SVGSVGElement>;

const SearchIcon = React.forwardRef<SVGSVGElement, SearchIconProps>(
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
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" clipPath="url(#a)"><path d="m19 19-4-4m-6 2A8 8 0 1 0 9 1a8 8 0 0 0 0 16"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
    </svg>
  )
);

SearchIcon.displayName = "SearchIcon";
export default React.memo(SearchIcon);
