import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const container = style({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 20,
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const toast = style({
  width: "80%",
  padding: vars.space[2],
  textAlign: "center",
  fontSize: 16,
  color: vars.color.text,
  boxShadow: "0px 4px 3px rgba(0,0,0,0.25)",
  borderRadius: 20,
});

const sucessToast = style({
  backgroundColor: "#E8E5FF",
});

const errorToast = style({
  backgroundColor: "rgba(254,82,92,0.15)",
});

const styles = { toast, sucessToast, errorToast, container };

export default styles;
