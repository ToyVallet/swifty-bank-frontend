import { style } from "@vanilla-extract/css";

const main = style({
  height: "100%",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
});

const topWrapper = style({
  marginTop: "100px",
});

const paragraph = style({
  marginTop: "2rem",
});

const figure = style({
  position: "relative",
  width: "200px",
  height: "200px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "::before": {
    position: "absolute",
    content: "",
    inset: 0,
    width: "200px",
    height: "200px",
    background: '#6552FE',
    opacity: '0.2',
    filter: 'blur(8px)',
    borderRadius: "999px",
  }
});

const img = style({
  zIndex: "1000"
})

const button = style({
});

const styles = {
  main,
  topWrapper,
  paragraph,
  figure,
  img,
  button
};

export default styles;
