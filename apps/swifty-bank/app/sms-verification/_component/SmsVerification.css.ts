import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const hidden = style({
  color: "transparent",
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: 16,
  caretColor: "transparent",
  textAlign: "center",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const display = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  gap: 6,
});

const digit = style({
  width: 50,
  height: 53.33,
  borderRadius: 15,
  border: `2px solid ${vars.color.primary}`,
  // display: "grid",
  // placeContent: "center",
  fontSize: 23,
  fontWeight: "medium",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
});

const styles = {
  hidden,
  display,
  digit,
};

export default styles;
