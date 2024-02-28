import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const container = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 16,
  fontWeight: 500,
  marginBottom: vars.space[2],
});

const inputCheck = style({
  display: "none",
});

const label = style({
  cursor: "pointer",
});

const styles = {
  container,
  inputCheck,
  label,
};

export default styles;
