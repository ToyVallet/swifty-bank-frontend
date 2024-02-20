import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../styles/vars.css";
import { Height } from "./types";

const wrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
  touchAction: "pan-x pan-y",
});

const container = style({
  zIndex: 1000,
  position: "fixed",
  backgroundColor: vars.color.background,
  borderRadius: 25,
  bottom: 15,
  left: 15,
  right: 15,
  boxSizing: "border-box",
  padding: "0px 27px 0px 27px",
  transition: "top 0.2s ease-in-out",
  overflow: "hidden",
});

const content = recipe({
  base: {
    width: "100%",
    transition: "height 0.3s ease-in-out",
    touchAction: "pan-x pan-y",
  },
  variants: {
    height: {
      auto: { height: "auto" },
      "1/3": { height: "33vh" },
      "2/3": { height: "66vh" },
      full: { height: "calc(100vh - 200px)" },
    } as Record<Height, { height: string }>,
    expandable: {
      true: {
        overflow: "scroll",
        paddingBottom: 0,
      },
      false: {
        overflow: "hidden",
        paddingBottom: 27,
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
  width: 50,
  height: 4,
  margin: "10px auto 40px auto",
  backgroundColor: vars.color.gray[300],
  borderRadius: 5,
});

const draggable = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

const header = style({
  marginBottom: 27,
  fontSize: 22,
  fontWeight: "bold",
});

const styles = {
  wrapper,
  container,
  content,
  overlay,
  handle,
  draggable,
  header,
};

export default styles;
