import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const avatar = style({
  display: "block",
  borderRadius: "999px",
  margin: "0 auto",
});

const dummy = style({
  borderRadius: "999px",
  margin: "0 auto",
  background: vars.color.gray[500],
});

const small = style({
  width: "110px",
  height: "110px",
});

const large = style({
  width: "180px",
  height: "180px",
});

const styles = {
  avatar,
  dummy,
  small,
  large
};

export default styles;
