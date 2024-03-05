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
  justifyContent: "space-between",
});

const idInputFront = style({
  width: "40%",
  height: "100%",
});

const idInputHyphen = style({
  width: "24px",
  display: "flex",
  paddingTop: "1.5rem",
  margin: "auto 0",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "6rem",
  fontSize: "1rem",
});

const idInputBackBox = style({
  width: "40%",
  height: "100%",
  paddingTop: "1.5rem",
  display: "flex",
  flexDirection: "row",
  // justifyContent: "center",
  alignItems: "center",
});

const idInputBack = style({
  minWidth: "20%",
  width: "40px",
  fontSize: "1rem",
  textAlign: "center",
  alignItems: "center",
  height: "100%",
  borderWidth: 2,
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
  marginRight: "0.5rem",
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
  hideElement,
  nextButton,
  idLabel,
  noticeMessage,
  formContainer,
};

export default styles;
