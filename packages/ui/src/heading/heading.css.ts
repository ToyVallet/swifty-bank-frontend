import { style } from '@vanilla-extract/css';

const h1 = style({
  color: 'black',
  fontWeight: '700',
  fontSize: '28px',
});
const h2 = style([h1,{ fontSize: '24px'}]);

const h3 = style([h1,{ fontSize: '20px'}]);

const styles = {
  h1,
  h2,
  h3
};

export default styles;
