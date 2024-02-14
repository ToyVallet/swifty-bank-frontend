import { style } from "@vanilla-extract/css";

const container = style({
  width: "100%",
  height: "100%",
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const list = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 40,
});

const listContent = style({
  display: "inline-block",
  marginTop: 8,
});

const listDetail = style({
  display: "inline-block",
});

const styles = {
  container,
  list,
  listContent,
  listDetail,
};

export default styles;
