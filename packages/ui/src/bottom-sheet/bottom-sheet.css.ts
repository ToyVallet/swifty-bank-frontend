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
  maxHeight: "90%",
  boxSizing: "border-box",
  padding: "0px 20px 20px 20px",
  transition: "top 0.2s ease-in-out",
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
  height: 3,
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
