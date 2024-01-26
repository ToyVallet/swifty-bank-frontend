import { style } from '@vanilla-extract/css';

const head1 = style({
  color: 'black',
  fontSize: '28px',
  fontWeight: '700',
});

const head2 = style({
  color: 'black',
  fontSize: '24px',
  fontWeight: '700',
});

const head3 = style({
  color: 'black',
  fontSize: '20px',
  fontWeight: '700',
});

const styles = {
  head1,
  head2,
  head3
};

export default styles;
