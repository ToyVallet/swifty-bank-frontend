import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  color: vars.color.text,
});

const header = style({
  display: "flex",
  flexDirection: "column",
});

const explain = style({
  marginTop: vars.space[2],
});

const imgContainer = style({
  margin: "30% 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const imgBackDropCircle = style({
  width: "240px",
  height: "240px",
  backgroundColor: `rgba(101, 82, 254, 0.2) `,
  filter: "blur(10px)",
  borderRadius: "50%",
  position: "absolute",
});

const img = style({
  width: "40%",
  height: "40%",
  zIndex: 1,
});

export const styles = {
  container,
  header,
  explain,
  imgContainer,
  imgBackDropCircle,
  img,
};
