import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const NotDefinition = style({
  width: "100%",
  height: "6.75rem",
  background: vars.color.gray[600],
  marginTop: "1.875rem",
  borderRadius: "20px"
});

const styles = {
  NotDefinition,
};

export default styles;
