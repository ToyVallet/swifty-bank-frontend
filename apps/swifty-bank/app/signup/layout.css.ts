import { style } from "@vanilla-extract/css";

const layout = style({
  paddingTop: 66,
});

export const title = style({
  fontSize: 27,
  fontWeight: "bold",
  whiteSpace: "pre-line",
});

const styles = {
  layout,
};

export default styles;
