import { styles } from "@/_component/mainIcon.css";

type Props = {
  children: React.ReactNode;
};

export default function MainIcon({ children }: Props) {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgBackDropCircle} />
      {children}
    </div>
  );
}
