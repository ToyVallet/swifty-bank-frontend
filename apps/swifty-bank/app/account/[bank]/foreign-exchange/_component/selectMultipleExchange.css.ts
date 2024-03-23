import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  marginTop: 46,
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",
  columnGap: 20,
  rowGap: 38,
  overflowY: "hidden",
});

const button = style({
  backgroundColor: "inherit",
  border: "none",
  width: "100%",
  height: "100%",
  fontSize: 18,
  fontWeight: 600,
  textAlign: "center",
  padding: "20px 20px",
  borderRadius: vars.space[2],
});

const unSelectButton = style([
  button,
  {
    border: "1px solid #717171",
  },
]);

const selectButton = style([
  button,
  {
    border: "2.5px solid #6552FE",
  },
]);

const styles = { container, unSelectButton, selectButton };

export default styles;
