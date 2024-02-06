import { style } from "@vanilla-extract/css";

const nextButton = style({
  position: "absolute",
  bottom: "2rem",
});

const idInputContainer = style({
  display: "flex",
  flexDirection: "row",
});

const idLabel = style({
  fontSize: "1rem",
  fontWeight: "bold",
  display: "flex",
});

const idInputFrontBox = style({
  width: "40%",
});

const idInputBackBox = style({
  width: "40%",
});

const idInputHyphen = style({
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "6rem",
});

const inputContainer = style({});

const hideElement = style({
  display: "none",
});

const styles = {
  idInputContainer,
  inputContainer,
  idInputFrontBox,
  idInputBackBox,
  idInputHyphen,
  hideElement,
  nextButton,
  idLabel,
};

export default styles;
