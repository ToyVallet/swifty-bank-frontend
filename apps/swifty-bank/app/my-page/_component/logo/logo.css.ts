import { style } from "@vanilla-extract/css";

const logo = style({
  display: "flex",
  flexFlow: "row nowrap",
  alignItems: "center",
});

const heading1 = style({
  textTransform: "capitalize",
  paddingLeft: "1rem",
});

const styles = {
  logo,
  heading1
};

export default styles;
