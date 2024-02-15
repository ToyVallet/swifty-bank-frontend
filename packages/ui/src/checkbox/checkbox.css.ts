import { style } from "@vanilla-extract/css";
import { vars } from "../styles/vars.css";

const container = style({
  width: "100%",
  display: "flex",
  padding: "0px 10px",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 20,
  fontWeight: 500,
});

const inputCheck = style({
  display: "none",
});

const leftSection = style({
  display: "flex",
  gap: vars.space[1],
  alignItems: "center",
});

const rightSection = style({
  display: "flex",
  alignItems: "center",
});

const styles = { container, inputCheck, leftSection, rightSection };

export default styles;
