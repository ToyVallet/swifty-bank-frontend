import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles";

export const container = style({
  width: "100%",
  height: "100%",
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

export const header = style({
  paddingBottom: `${vars.space[3]}`,
  borderBottom: `3px solid ${vars.color.gray[300]}`,
});

export const content = style({
  marginTop: vars.space[1],
});

export const list = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[5],
});

export const listContent = style({
  display: "inline-block",
  marginTop: vars.space[1],
});

export const listDetail = style({
  display: "inline-block",
});
