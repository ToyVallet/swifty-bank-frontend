import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const h1 = style({
  color: vars.color.text,
  fontWeight: "700",
  fontSize: "27px",
});
const h2 = style([h1, { fontSize: "22px" }]);

const h3 = style([h1, { fontSize: "18px" }]);

const styles = {
  h1,
  h2,
  h3,
};

export default styles;
