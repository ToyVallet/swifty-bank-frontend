import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  width: "100%",
  height: "100%",
  fontSize: 16,
  display: "flex",
  flexDirection: "column",
  gap: 32,
});

const header = recipe({
  base: {
    paddingBottom: 24,
  },
  variants: {
    borderBottom: {
      light: { borderBottom: `3px solid #E2E8F0` },
      dark: { borderBottom: `3px solid #E2E8F0` },
    },
  },
});

const link = style({
  display: "inline-block",
  cursor: "pointer",
  marginBottom: "10%",
});

const content = style({
  marginTop: 8,
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
  header,
  link,
  content,
  list,
  listContent,
  listDetail,
};

export default styles;
