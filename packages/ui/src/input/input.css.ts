import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const input = style({
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
  outline: 'none',
  ':focus': {
    borderColor: '#000',
  },
  transition: 'all 0.2s ease-in-out',
});

const label = style({
  color: '#000',
});

const bottomText = style({
  color: '#ccc',
  fontSize: '12px',
});

const required = style({
  color: 'red',
});

const labelContainer = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
});

const styles = {
  container,
  input,
  label,
  bottomText,
  required,
  labelContainer,
};

export default styles;
