import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  marginTop: vars.space[8],
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[7],
});

const list = style({
  display: "flex",
  gap: vars.space[1],
  alignItems: "center",
});

const title = style({
  fontSize: 18,
  marginBottom: vars.space[1],
});

const detail = style({
  fontSize: 14,
});

const styles = { container, list, title, detail };

export default styles;
