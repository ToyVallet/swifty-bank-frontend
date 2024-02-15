import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const header = style({
  paddingBottom: 24,
  borderBottom: `3px solid ${vars.color.gray[300]}`,
});

const link = style({
  display: "inline-block",
  cursor: "pointer",
  marginBottom: "10%",
});

const content = style({
  marginTop: vars.space[1],
});

const container = style({
  width: "100%",
  height: "100%",
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

const list = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[5],
});

const listContent = style({
  display: "inline-block",
  marginTop: vars.space[1],
});

const listDetail = style({
  display: "inline-block",
});

const styles = {
  header,
  link,
  content,
  container,
  list,
  listContent,
  listDetail,
};

export default styles;
