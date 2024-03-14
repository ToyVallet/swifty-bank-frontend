import BottomTap from "@/(bottomTap)/_component/BottomTap";
import styles from "@/layout.css";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      {children}
      <BottomTap />
    </div>
  );
}
