import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../styles/vars.css";

const wrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

const container = recipe({
  base: {
    zIndex: 1000,
    position: "fixed",
    backgroundColor: vars.color.background,
    borderRadius: 25,
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
    // minHeight: "20%",
    boxSizing: "border-box",
    padding: "5px 20px 20px 20px",
    transition: "top 0.2s ease-in-out",
  },
  variants: {
    snapTo: {
      25: {
        top: "75%",
      },
      50: {
        top: "50%",
      },
      75: {
        top: "25%",
      },
      100: {
        top: 15,
      },
    },
  },
});

const overlay = style({
  zIndex: 999,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

const handle = style({
  width: 75,
  height: 5,
  backgroundColor: vars.color.gray[300],
  borderRadius: 5,
});

const handleContainer = style({
  display: "flex",
  justifyContent: "center",
  marginBottom: 10,
  padding: 10,
});

const styles = {
  wrapper,
  container,
  overlay,
  handle,
  handleContainer,
};

export default styles;
