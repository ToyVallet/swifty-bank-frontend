import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const container = style({
  width: "100%",
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 16,
  fontWeight: 500,
  marginBottom: vars.space[2],
});

const inputCheck = style({
  display: "none",
});

const leftSection = style({
  display: "flex",
  gap: vars.space[1],
  alignItems: "center",
});

const label = style({
  cursor: "pointer",
});

const rightSection = style({
  display: "flex",
  alignItems: "center",
});

const svg = style({
  transition: "stroke 1s ease-in-out",
  cursor: "pointer",
});

const styles = { container, inputCheck, leftSection, rightSection, svg, label };

export default styles;
