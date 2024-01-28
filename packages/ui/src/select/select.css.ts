import { style } from '@vanilla-extract/css';

const select = style({
  width: '390px',
  height: '51px',
  borderRadius: '25px',
  border: '1px solid #E5FF70',
  cursor: 'pointer',
  padding: '0 16px',
  textAlign: 'left',
  appearance: 'none',
  ':focus': {
    outline: 'none',
  },
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '16px',
});

const label = style({
  color: '#FFFFFF',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  margin: '0 0 8px 0',
});

const styles = {
  select,
  label,
  container,
};

export default styles;