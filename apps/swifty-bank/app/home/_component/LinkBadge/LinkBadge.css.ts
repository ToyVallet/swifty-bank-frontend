import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const common = style({
  width: "59px",
  height: "38px",
  borderRadius: "8px",
});

const primary = style({
  backgroundColor: vars.color.primary,
  color: "white",
});

const secondary = style({
  backgroundColor: vars.color.secondary,
});

const text = style({
  display: "flex",
  lineHeight: "38px",
  justifyContent: "center",
});

const styles = {
  common,
  primary,
  secondary,
  text,
};

export default styles;
