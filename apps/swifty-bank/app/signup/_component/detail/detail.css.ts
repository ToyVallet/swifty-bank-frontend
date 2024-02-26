import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  fontSize: 16,
  zIndex: 100000,
  backgroundColor: vars.color.background,
  padding: `58px 20px 34px`,
});

const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

const header = style({
  paddingBottom: 24,
  borderBottom: `3px solid ${vars.color.gray[300]}`,
});

const button = style({
  display: "inline-block",
  border: "none",
  backgroundColor: vars.color.background,
  cursor: "pointer",
  marginBottom: "10%",
});

const content = style({
  marginTop: vars.space[1],
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
  button,
  content,
  container,
  list,
  listContent,
  listDetail,
  contentContainer,
};

export default styles;
