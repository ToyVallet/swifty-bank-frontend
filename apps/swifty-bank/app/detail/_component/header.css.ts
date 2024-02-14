import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

const styles = {
  header,
  link,
  content,
};

export default styles;
