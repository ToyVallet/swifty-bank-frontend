import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  bottom: vars.space[6],
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: `0 20px`,
});

const styles = {
  container,
};

export default styles;
