import styles from './heading.css';

const HeadType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const;

interface HeadingProps {
  type?: typeof HeadType[keyof typeof HeadType];
  text: string;
}

export default function Heading({type = HeadType.h1, text}: HeadingProps) {
  switch(type) {
    case HeadType.h2:
      return <h2 className={styles.head2}>{text}</h2>

    case HeadType.h3:
      return <h3 className={styles.head3}>{text}</h3>

    default:
      return <h1 className={styles.head1}>{text}</h1>
  }
}
