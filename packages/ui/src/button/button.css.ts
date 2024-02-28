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
  transitionProperty: "background-color, color, border-color",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
});

const disabled = style({
  backgroundColor: "#B4B4B4",
  cursor: "not-allowed",
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

const styles = {
  base,
  disabled,
  transparent,
  fixed,
};

export default styles;
