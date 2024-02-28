import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[3],
});

const input = style({
  borderRadius: 25,
  border: `solid 2px ${vars.color.primary}`,
  padding: "13px 23px",
  fontSize: 17,
  outline: "none",
  backgroundColor: vars.color.background,
  ":focus": {
    backgroundColor: vars.color.backgroundDimmer,
  },
  transition: "all 0.2s ease-out",
  "::placeholder": {
    color: "#ccc",
    transition: "all 0.2s ease-out",
  },
});

const error = style({
  borderColor: "red",
  "::placeholder": {
    color: "red",
  },
});

const label = style({
  color: vars.color.primary,
  fontSize: 14,
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
  gap: 11,
});

const styles = {
  container,
  input,
  label,
  bottomText,
  required,
  labelContainer,
  error,
};

export default styles;
