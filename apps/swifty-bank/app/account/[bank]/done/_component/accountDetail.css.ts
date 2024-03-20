import { vars } from "@swifty/ui/styles/vars.css";
import { style } from "@vanilla-extract/css";
import background from "../../../../../public/img/account/rectangle.png";

const flexColumn = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const container = style([
  flexColumn,
  {
    color: "white",
    padding: `${vars.space[4]} 0`,
    marginTop: vars.space[6],
    width: "100%",
    height: "100%",
    borderRadius: vars.space[5],
    backgroundImage: `url(${background.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontWeight: "bold",
  },
]);

const contentContaine = style([
  flexColumn,
  {
    gap: vars.space[1],
    marginBottom: vars.space[4],
  },
]);

const span = style({
  fontSize: 14,
  fontWeight: 300,
  marginTop: vars.space[1],
});

const exchangeBtn = style([
  span,
  {
    display: "flex",
    alignItems: "center",
    gap: vars.space[1],
    border: "none",
    background: "none",
    color: "white",
    cursor: "pointer",
  },
]);

const exchangeList = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  gap: vars.space[4],
  fontSize: 18,
});

const styles = { container, contentContaine, exchangeBtn, span, exchangeList };

export default styles;
