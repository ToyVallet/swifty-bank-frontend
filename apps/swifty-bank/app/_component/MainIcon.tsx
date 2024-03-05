import { styles } from "@/_component/mainIcon.css";

type Props = {
  children: React.ReactNode;
  type?: "success" | "fail";
};

export default function MainIcon({ children, type = "success" }: Props) {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgBackDropCircle({ backgroudColor: type })} />
      {children}
    </div>
  );
}
