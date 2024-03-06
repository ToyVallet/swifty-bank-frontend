import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const container = style({
  width: "100%",
  display: "grid",
  gridTemplateRows: "repeat(4, 1fr)",
  gridTemplateColumns: "repeat(3, 1fr)",
});

const button = style({
  backgroundColor: "transparent",
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
  marginBottom: 198,
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

const styles = {
  container,
  button,
  passwordContainer,
  selectPassword,
  unSelectPassword,
};

export default styles;
