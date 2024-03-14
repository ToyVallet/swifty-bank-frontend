import styles from "@/signup/layout.css";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.layout}>{children}</div>;
}
