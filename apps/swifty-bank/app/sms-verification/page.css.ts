import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  flex: 1,
  width: "100%",
});

const headers = style({
  width: "100%",
  textAlign: "left",
  lineHeight: 1.5,
  marginBottom: 59,
  maxWidth: 383,
});

const info = style({
  marginTop: 25,
  borderRadius: 25,
  color: vars.color.gray[600],
  background: vars.color.gray[300],
  fontSize: 15,
  fontWeight: "medium",
  border: "none",
  padding: "4px 14px",
});

const styles = {
  container,
  headers,
  info,
};

export default styles;
