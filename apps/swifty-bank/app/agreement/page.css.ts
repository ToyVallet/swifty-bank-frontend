import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  color: vars.color.text,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
});

export const explain = style({
  marginTop: vars.space[2],
});

export const imgContainer = style({
  margin: "40% 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

export const imgCircle = style({
  width: "200px",
  height: "200px",
  backgroundColor: `rgba(101, 82, 254, 0.2) `,
  filter: "blur(10px)",
  borderRadius: "50%",
  position: "absolute",
});

export const img = style({
  width: "50%",
  height: "50%",
  zIndex: 1,
});
