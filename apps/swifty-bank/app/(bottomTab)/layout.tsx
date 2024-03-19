import BottomTab from "@/(bottomTab)/_component/BottomTab";
import styles from "@/layout.css";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      {children}
      <BottomTab />
    </div>
  );
}
