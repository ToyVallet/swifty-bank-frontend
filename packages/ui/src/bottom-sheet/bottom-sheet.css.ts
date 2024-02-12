import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const wrapper = style({
  position: "relative",
  width: "100%",
  height: "100%",
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

const content = style({
  overflow: "scroll",
  width: "100%",
  height: "50vh",
  transition: "height 0.2s ease-in-out",
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
