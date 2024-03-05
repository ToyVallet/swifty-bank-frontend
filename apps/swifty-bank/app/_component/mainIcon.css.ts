import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const imgContainer = style({
  margin: "35% 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const imgBackDropCircle = recipe({
  base: {
    width: "300px",
    height: "300px",
    filter: "blur(30px)",
    borderRadius: "50%",
    position: "absolute",
  },
  variants: {
    backgroudColor: {
      fail: { backgroundColor: "rgba(254, 82, 134, 0.2)" },
      success: { backgroundColor: "rgba(101, 82, 254, 0.2)" },
    },
  },

  defaultVariants: {
    backgroudColor: "success",
  },
});

export const styles = {
  imgContainer,
  imgBackDropCircle,
};
