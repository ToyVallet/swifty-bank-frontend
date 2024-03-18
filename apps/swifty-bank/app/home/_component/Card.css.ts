import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const common = style({
  border: `2px solid ${vars.color.gray[200]}`,
  boxShadow: `0 0 10px ${vars.color.gray[200]}`,
});

const banner = style({
  borderRadius: "25px",
  width: "100%",
  height: "132px",
});

const list = style({
  borderRadius: "25px",
  width: "100%",
  height: "338px",
});

const link = style({
  borderRadius: "12px",
  width: "30%",
  height: "48px",
});

const styles = {
  common,
  banner,
  list,
  link,
};

export default styles;
