declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    hashSpy?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    activeClass?: string;
    className?: string;
    children?: React.ReactNode;
    containerId?: string;
  }

  export class Link extends React.Component<LinkProps> {}
}
