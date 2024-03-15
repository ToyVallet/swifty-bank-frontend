import { style } from "@vanilla-extract/css";

const InfoBoard = style({
  margin: "4.625rem 0",
  padding: "0 1rem",
  fontSize: "18px",
});

const InfoList = style({
  display: "grid",
  gridTemplateColumns: "1fr minmax(12rem, 1fr)",
  gridTemplateRows: "repeat(3, 2.438rem)",
  rowGap: "2.438rem",
  letterSpacing: "2px",
});

const InfoTerm = style({
});

const InfoDescription = style({
  textAlign: "end",
});

const styles = {
  InfoBoard,
  InfoList,
  InfoTerm,
  InfoDescription,
};

export default styles;
