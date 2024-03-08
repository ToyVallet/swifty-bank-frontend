import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  display: "grid",
  gridTemplateRows: "repeat(4, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
  justifyContent: "center",
  position: "relative",
});

const button = style({
  backgroundColor: "transparent",
  position: "relative",
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 120,
  height: 88,
});

const passwordContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: 14,
  marginTop: vars.space[6],
  marginBottom: "20%",
});

const password = style({
  width: 20,
  height: 20,
  borderRadius: "50%",
  transition: "all 0.3s ease-in-out",
});

const unSelectPassword = style([
  password,
  {
    backgroundColor: vars.color.gray[500],
  },
]);

const selectPassword = style([
  password,
  {
    backgroundColor: "#6552FE",
  },
]);

const outerCircle = style({
  width: "70%",
  height: "100%",
  borderRadius: "50%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const innerCircle = style([
  outerCircle,
  {
    width: "80%",
    height: "80%",
    zIndex: 1000,
  },
]);

const priority = style({
  zIndex: 1000,
});

const stroke = style({
  stroke: "#6552FE",
});
const styles = {
  container,
  button,
  passwordContainer,
  selectPassword,
  unSelectPassword,
  outerCircle,
  innerCircle,
  priority,
  stroke,
};

export default styles;
