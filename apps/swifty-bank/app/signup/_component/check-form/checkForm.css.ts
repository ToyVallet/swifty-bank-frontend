import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const termsSection = style({
  marginTop: vars.space[1],
  flexGrow: 1,
  flexBasis: 1,
  marginBottom: vars.space[5],
});

const buttonSection = style({
  flexGrow: 1,
  flexBasis: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const closeButton = style({
  boxShadow: "none",
  backgroundColor: vars.color.background,
  color: vars.color.gray[600],
  border: "none",
});

const styles = { container, buttonSection, closeButton, termsSection };

export default styles;
