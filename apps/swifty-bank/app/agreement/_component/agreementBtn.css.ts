import { style } from "@vanilla-extract/css";

const container = style({
  width: "100%",
  position: "fixed",
  bottom: 32,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const styles = {
  container,
};
