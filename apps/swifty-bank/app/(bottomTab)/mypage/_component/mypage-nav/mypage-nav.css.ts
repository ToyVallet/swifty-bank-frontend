import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const list = style({
});

const item = style({
  width: "100%",
  height: "4.813rem",
  listStyle: "none",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  borderBottom: `1px solid ${vars.color.gray[300]}`,
});

const lastItem = style({
  borderBottom: 0,
});

const flexWrapper = style({
  width: "100%",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center"
});

const button = style({
  background: "transparent",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  fontWeight: 500,
  letterSpacing: "2px",
});

const withdrawButton = style({
  color: 'red',
});

const styles = {
  list,
  item,
  flexWrapper,
  button,
  lastItem,
  withdrawButton
};

export default styles;
