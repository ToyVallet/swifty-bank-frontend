import { style } from "@vanilla-extract/css";

import { vars } from "@swifty/ui/styles/vars.css";

const header = style({
  marginBottom: "2rem",
});

const formContainer = style({
  position: "relative",
});

const idInputContainer = style({
  display: "flex",
  flexDirection: "column",
  margin: "3rem 0",
  height: "4rem",
});

const idLabel = style({
  fontSize: "0.75rem",
  fontWeight: "bold",
  display: "flex",
  color: vars.color.primary,
  paddingLeft: "1.5rem",
  marginBottom: "-0.75rem",
});

const idInputBox = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  // height: "100%",
});

const idInputFront = style({
  width: "40%",
  height: "100%",
});

const idInputHyphen = style({
  width: "20%",
  display: "flex",
  margin: "auto 0",
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
  textAlign: "center",
  alignItems: "center",
  height: "100%",
  justifyContent: "space-evenly",
});

const inputContainer = style({
  marginBottom: "2rem",
  height: "4rem",
});

const nextButton = style({
  position: "fixed",
  bottom: 0,
  padding: "0 0 2rem 0",
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "black",
});

const hideElement = style({
  display: "none",
});

const noticeMessage = style({
  fontSize: "0.8rem",
  color: vars.color.gray[400],
  textAlign: "center",
  margin: "3rem 0",
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
  formContainer,
};

export default styles;
