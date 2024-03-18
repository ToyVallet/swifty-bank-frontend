import { style } from "@vanilla-extract/css";

const infoBoard = style({
  margin: "4.625rem 0",
  padding: "0 1rem",
  fontSize: "18px",
});

const infoList = style({
  display: "grid",
  gridTemplateColumns: "1fr minmax(12rem, 1fr)",
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
  infoBoard,
  infoList,
  infoTerm,
  infoDescription,
};

export default styles;
