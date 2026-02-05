declare module "react-player" {
  import * as React from "react";

  export type ReactPlayerProps = {
    url?: string | string[];
    playing?: boolean;
    controls?: boolean;
    width?: string | number;
    height?: string | number;
    playsinline?: boolean;
    muted?: boolean;
    loop?: boolean;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: unknown;
  };

  const ReactPlayer: React.ComponentType<ReactPlayerProps>;
  export default ReactPlayer;
}
