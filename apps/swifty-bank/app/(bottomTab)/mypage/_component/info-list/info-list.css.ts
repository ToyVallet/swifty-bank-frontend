import { style } from "@vanilla-extract/css";

const infoList = style({
  gridTemplateColumns: "1fr minmax(10rem, 1fr)",
  display: "grid",
  gridTemplateRows: "repeat(3, 2.438rem)",
  rowGap: "2.438rem",
  letterSpacing: "2px",
});

const infoTerm = style({
});

const infoDescription = style({
  textAlign: "end",
});

const styles = {
  infoList,
  infoTerm,
  infoDescription,
};

export default styles;
