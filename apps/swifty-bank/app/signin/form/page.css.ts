import { style } from "@vanilla-extract/css";

import { vars } from "@swifty/ui/styles/vars.css";

const header = style({
  marginBottom: "2rem",
});

const idInputContainer = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "2rem",
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

const idInputHyphen = style({
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "6rem",
  fontSize: "2rem",
});

const idInputBackBox = style({
  width: "40%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const idInputBack = style({
  minWidth: "20%",
  width: "30%",
  fontSize: "1rem",
  textAlign: "center",
  alignItems: "center",
  height: "50%",
  borderWidth: 1,
  borderColor: vars.color.primary,
  borderRadius: 25,
  outline: "none",
  backgroundColor: vars.color.background,
  ":focus": {
    backgroundColor: vars.color.backgroundDimmer,
  },
  transition: "all 0.2s ease-out",
  "::placeholder": {
    color: "#ccc",
    transition: "all 0.2s ease-out",
  },
});

const idInputBlind = style({
  width: "90%",
  fontSize: "2rem",
  display: "flex",
  height: "25%",
  justifyContent: "space-evenly",
});

const inputContainer = style({
  marginBottom: "2rem",
});

const nextButton = style({
  position: "absolute",
  bottom: "2rem",
  width: "100%",
});

const hideElement = style({
  display: "none",
});

const noticeMessage = style({
  fontSize: "0.8rem",
  color: vars.color.gray[400],
  textAlign: "center",
  marginBottom: "2rem",
});

const styles = {
  header,
  inputContainer,
  idInputContainer,
  idInputBox,
  idInputFront,
  idInputBackBox,
  idInputBack,
  idInputHyphen,
  idInputBlind,
  hideElement,
  nextButton,
  idLabel,
  noticeMessage,
};

export default styles;
