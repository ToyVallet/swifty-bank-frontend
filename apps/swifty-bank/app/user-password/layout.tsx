import styles from "@/signup/layout.css";

export default function PasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.layout}>{children}</div>;
}
