import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const container = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
});

const label = style({
  fontSize: "1.063rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
});

const selectInput = style({
  width: "100%",
  height: "3rem",
  border: `solid 2px ${vars.color.primary}`,
  borderRadius: 25,
  padding: "0 1rem",
  marginBottom: "1rem",
  marginTop: "0.5rem",
  outline: "none",
  backgroundColor: vars.color.background,
  ":focus": {
    borderColor: vars.color.primary,
  },
});

const optionList = style({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "90%",
});

const option = style({
  fontSize: "1.125rem",
  // marginBottom: "0.5rem",
  backgroundColor: "transparent",
  border: "none",
});

const styles = {
  label,
  container,
  selectInput,
  optionList,
  option,
};

export default styles;
