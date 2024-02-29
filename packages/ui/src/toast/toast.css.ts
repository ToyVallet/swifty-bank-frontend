import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const container = style({
  position: "fixed",
  bottom: 30,
  width: "80%",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backgroundColor: "transparent",
});

const toast = style({
  width: "100",
  padding: vars.space[2],
  textAlign: "center",
  color: vars.color.text,
  boxShadow: "0px 4px 3px rgba(0,0,0,0.25)",
});

const sucessToast = style({
  backgroundColor: "#E8E5FF",
});

const errorToast = style({
  backgroundColor: "rgba(254,82,92,0.15)",
});

const styles = { container, toast, sucessToast, errorToast };

export default styles;
