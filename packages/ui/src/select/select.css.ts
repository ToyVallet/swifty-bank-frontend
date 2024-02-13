import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const select = style({
  width: "100%",
  height: "51px",
  borderRadius: "1.5rem",
  border: `1px solid ${vars.color.primary}`,
  cursor: "pointer",
  padding: "0 1rem 0 1rem",
  textAlign: "left",
  ":focus": {
    outline: "none",
  },
  appearance: "none",
});

const container = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const label = style({
  color: "#FFFFFF",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  margin: "0 0 8px 0",
});

const placeholder = style({
  color: "#000",
});

const styles = {
  select,
  label,
  container,
  placeholder,
};

export default styles;
