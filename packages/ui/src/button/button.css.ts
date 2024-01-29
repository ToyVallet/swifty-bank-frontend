import { style } from "@vanilla-extract/css";

const base = style({
  width: '95%',
  padding: '10px 0',
  borderRadius: '24px',
  backgroundColor: '#9EFF42',
  border: 'none',
  fontSize: '16px',
  fontWeight: '500',
  cursor: 'pointer',
  transitionProperty: 'background-color, color, border-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '150ms',
});

const disabled = style([base, {
  backgroundColor: '#B4B4B4',
  cursor: 'not-allowed',
}]);

const styles = {
  base,
  disabled,
}

export default styles