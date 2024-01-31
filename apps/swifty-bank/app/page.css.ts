import { vars } from "@swifty/ui/styles/vars.css";
import { style, globalStyle } from "@vanilla-extract/css";

export const container = style({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: vars.space[3],
});

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  fontSize: 16,
  color: vars.color.text,
  backgroundColor: vars.color.background,
});
