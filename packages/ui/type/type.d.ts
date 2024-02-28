declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.HTMLAttributes<HTMLOrSVGElement>>;
  const src: (Prop: React.HTMLAttributes<HTMLOrSVGElement>) => ReactComponent;
  export default src;
}
