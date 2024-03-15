import { style } from "@vanilla-extract/css";

const checkboxLabel = style({
  width: '100%',
  position: 'relative',
  padding: '0.567rem 2.125rem',
  "::before": {
    position: 'absolute',
    content: '',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    width: '1.5rem',
    height: '1.5rem',
    background: 'url("/icon/non-check.svg") no-repeat center / 100% 100%',
  }
});

const checkboxInput = style({
  display: 'none'
});

const checked = style({
  "::before": {
    background: 'url("/icon/check.svg") no-repeat center / 100% 100%',
  }
});


const styles = {
  checkboxLabel,
  checkboxInput,
  checked
};

export default styles;
