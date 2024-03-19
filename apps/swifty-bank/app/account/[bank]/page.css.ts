import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const imageSection = style({
  marginTop: vars.space[8],
  display: "grid",
  gap: vars.space[4],
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
});

const imageContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.15)",
  borderRadius: 25,
  width: 162,
  height: 192,
});

const exchangeImg = style({
  width: "60%",
});
const styles = { imageSection, imageContainer, exchangeImg };

export default styles;
