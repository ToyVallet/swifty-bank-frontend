import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

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

const styles = {
  mainContainer,
  header,
  centerHeader,
  centerHeaderTitle,
  explain,
};

export default styles;
