import { style } from "@vanilla-extract/css";

const nextButton = style({
  position: "absolute",
  bottom: "2rem",
});

const idInputContainer = style({
  display: "flex",
  flexDirection: "column",
});

const idLabel = style({
  fontSize: "1rem",
  fontWeight: "bold",
  display: "flex",
});

const idInputBox = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const idInputFront = style({
  width: "40%",
});

const idInputBack = style({
  width: "15%",
});

const idInputHyphen = style({
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "6rem",
  fontSize: "2rem",
});

const inputContainer = style({});

const hideElement = style({
  display: "none",
});

const styles = {
  idInputContainer,
  inputContainer,
  idInputBox,
  idInputFront,
  idInputBack,
  idInputHyphen,
  hideElement,
  nextButton,
  idLabel,
};

export default styles;
