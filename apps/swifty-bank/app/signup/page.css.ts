import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  color: vars.color.text,
});

const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const explain = style({
  marginTop: vars.space[2],
});

const img = style({
  width: 180,
  height: 200,
  zIndex: 1,
});

export const styles = {
  container,
  header,
  explain,
  img,
};
