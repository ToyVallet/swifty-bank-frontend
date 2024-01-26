import { style } from '@vanilla-extract/css';

const head1 = style({
  color: 'black',
  fontSize: '28px',
});

const head2 = style({
  color: 'black',
  fontSize: '24px',
});

const head3 = style({
  color: 'black',
  fontSize: '20px',
});

const styles = {
  head1,
  head2,
  head3
};

export default styles;
