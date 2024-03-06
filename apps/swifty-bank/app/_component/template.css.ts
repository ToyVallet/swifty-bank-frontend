import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";
import { recipe } from "@vanilla-extract/recipes";

const mainContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  color: vars.color.text,
});

const header = style({
  display: "flex",
  flexDirection: "column",
});

const centerHeader = style([
  header,
  {
    alignItems: "center",
  },
]);

const centerHeaderTitle = style({
  textAlign: "center",
});

const explain = style({
  whiteSpace: "pre-line",
  marginTop: vars.space[2],
});

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
    backgroundColor: {
      fail: { backgroundColor: "rgba(254, 82, 134, 0.2)" },
      success: { backgroundColor: "rgba(101, 82, 254, 0.2)" },
    },
  },

  defaultVariants: {
    backgroundColor: "success",
  },
});

const styles = {
  mainContainer,
  header,
  centerHeader,
  centerHeaderTitle,
  explain,
  imgContainer,
  imgBackDropCircle,
};

export default styles;
