import { style } from "@vanilla-extract/css";

const list = style({
  margin: "4.625rem 0",
});

const item = style({
  listStyle: "none",
});


const checkboxList = style({
  marginBottom: '5.313rem'
});

const checkboxItem = style({
  display: 'flex',
  position: 'relative',
  "::after": {
    position: 'absolute',
    content: '',
    width: '1.5rem',
    height: '1.5rem',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
    flex: '1 1 auto',
    background: 'url("/icon/rightIcon.svg") no-repeat center / 100% 100%',
  }
});

const styles = {
  list,
  item,
  checkboxList,
  checkboxItem,
};

export default styles;
