import { style } from "@vanilla-extract/css";

const imgContainer = style({
  margin: "40% 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const imgBackDropCircle = style({
  width: "280px",
  height: "280px",
  backgroundColor: "rgba(101, 82, 254, 0.2)",
  filter: "blur(10px)",
  borderRadius: "50%",
  position: "absolute",
});

export const styles = {
  imgContainer,
  imgBackDropCircle,
};
