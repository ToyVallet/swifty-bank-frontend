import { style } from '@vanilla-extract/css';

const select = style({
  width: '50%',
  height: '51px',
  borderRadius: '1.5rem',
  border: '1px solid #E5FF70',
  cursor: 'pointer',
  padding: '0 1rem 0 1rem',
  textAlign: 'left',
  ':focus': {
    outline: 'none',
  },
  appearance: 'none',
});

const container = style({
  width: '100%',
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

const option = style({
  
});

const placeholder = style({
  // display: 'none',
  color: '#000',
});

const styles = {
  select,
  label,
  container,
  option,
  placeholder,
};

export default styles;