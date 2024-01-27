import styles from './heading.css';

type HeadType = 'h1' | 'h2' | 'h3';

interface HeadingProps {
  type?: HeadType;
  children: string;
}

/**
 * 헤딩 컴포넌트
 * @param {HeadType} type - 사용할 헤드 태그
 * @param {string} text - 헤딩 텍스트
 */
export default function Heading({type = 'h1', children}: HeadingProps) {
  switch(type) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>
    default:
      throw new Error('Invalid heading tag');
  }
}
