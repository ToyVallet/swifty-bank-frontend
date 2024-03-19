import { style } from "@vanilla-extract/css";

const button = style({
  fontSize: "18px",
  paddingTop: "1.688rem",
  width: "100%",
  border: "none",
  background: "transparent",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.606rem 0",
  ":hover": {
    cursor: "pointer"
  }
});


const styles = {
  button
};

export default styles;
