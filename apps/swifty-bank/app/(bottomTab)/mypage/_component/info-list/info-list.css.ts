import { style } from "@vanilla-extract/css";
import { vars } from "@swifty/ui/styles/vars.css";

const infoList = style({
  marginTop: "4.313rem",
  gridTemplateColumns: "1fr minmax(10rem, 1fr)",
  display: "grid",
  gridTemplateRows: "repeat(3, 4.813rem)",
  alignItems: "center",
  letterSpacing: "2px",
});

const infoTerm = style({
  position: "relative",
  "::after": {
    position: "absolute",
    content: '',
    inset: 0,
    top: '3.25rem',
    width: "100%",
    height: "1px",
    borderTop: `1px solid ${vars.color.gray[300]}`
  }
});

const infoDescription = style({
  textAlign: "end",
  fontWeight: 400,
  position: "relative",
  "::after": {
    position: "absolute",
    content: '',
    inset: 0,
    top: '3.25rem',
    width: "100%",
    height: "1px",
    borderTop: `1px solid ${vars.color.gray[300]}`
  }
});

const styles = {
  infoList,
  infoTerm,
  infoDescription,
};

export default styles;
