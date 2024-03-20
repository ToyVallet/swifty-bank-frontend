import { style } from "@vanilla-extract/css";

const list = style({
  margin: "2.313rem 0",
});

const item = style({
  width: "100%",
  listStyle: "none",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
});

const flexWrapper = style({
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  padding: "1.656rem 0"
});

const button = style({
  background: "transparent",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
});

const styles = {
  list,
  item,
  flexWrapper,
  button,
};

export default styles;
