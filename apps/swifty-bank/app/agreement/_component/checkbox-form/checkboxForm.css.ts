import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  height: "100%",
});

const buttonSection = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space[2],
});

const closeButton = style({
  boxShadow: "none",
  backgroundColor: vars.color.background,
  color: vars.color.gray[600],
  border: "none",
});
const styles = { container, buttonSection, closeButton };

export default styles;
