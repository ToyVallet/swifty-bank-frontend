import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  height: 98,
  borderTop: `1px solid ${vars.color.gray[500]}`,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  boxShadow: "0px -1px 6px rgba(0, 0, 0, 0.15)",
});

const li = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: "bold",
  position: "relative",
});

const emphasis = style([
  li,
  {
    color: vars.color.text,
  },
]);

const unemphasis = style([
  li,
  {
    color: "#898A8D",
  },
]);

const emphasisCircle = style({
  position: "absolute",
  width: 10,
  height: 10,
  backgroundColor: "#6552FE",
  borderRadius: "50%",
  top: -3,
  right: -9,
});

const styles = { container, emphasis, unemphasis, emphasisCircle };

export default styles;
