import { style } from "@vanilla-extract/css";

import { vars } from "../styles/vars.css";

const base = style({
  width: "100%",
  height: 65,
  padding: "10px 0",
  borderRadius: "24px",
  backgroundColor: vars.color.primary,
  color: vars.color.gray[100],
  border: "none",
  fontSize: 18,
  fontWeight: "bold",
  cursor: "pointer",
  transitionProperty: "background-color, color, border-color ",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
});

const disabled = style({
  backgroundColor: "#D9D9D9",
  color: vars.color.gray[600],
  cursor: "not-allowed",
});

const shadow = style({
  boxShadow: `0px 4px 3px rgba(0,0,0,0.25)`,
});

const transparent = style({
  backgroundColor: "transparent",
  color: vars.color.gray[500],
});

const fixed = style({
  width: "calc(100% - 40px)",
  position: "fixed",
  bottom: 10,
  left: 20,
  right: 20,
});

const pale = style({
  backgroundColor: vars.color.pale,
});

const styles = {
  base,
  disabled,
  transparent,
  fixed,
  shadow,
  pale
};

export default styles;
