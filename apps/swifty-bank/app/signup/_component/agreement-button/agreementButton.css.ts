import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  position: "fixed",
  bottom: vars.space[6],
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const styles = {
  container,
};

export default styles;
