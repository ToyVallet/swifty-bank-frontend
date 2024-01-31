import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const container = style({
  display: "flex",
  flexDirection: "column",
  gap: 21,
});

const input = style({
  borderWidth: 1,
  borderColor: vars.color.primary,
  borderRadius: 25,
  padding: "13px 23px",
  fontSize: 17,
  outline: "none",
  backgroundColor: vars.color.background,
  ":focus": {
    backgroundColor: vars.color.backgroundDimmer,
  },
  transition: "all 0.2s ease-in-out",
});

const label = style({
  color: vars.color.text,
  fontSize: 17,
  fontWeight: 700,
});

const bottomText = style({
  color: "#ccc",
  fontSize: "12px",
});

const required = style({});

const labelContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
});

const styles = {
  container,
  input,
  label,
  bottomText,
  required,
  labelContainer,
};

export default styles;
