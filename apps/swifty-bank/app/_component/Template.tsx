import styles from "@/_component/template.css";
import { title } from "@/signup/layout.css";
import { ReactNode } from "react";
import clsx from "clsx";

export default function Template({ children }: { children: React.ReactNode }) {
  return <main className={styles.mainContainer}>{children}</main>;
}

type HeaderProps = {
  main: string;
  type?: "center" | "row";
  sub?: string;
};

Template.Header = ({ main, sub, type = "row" }: HeaderProps) => {
  return (
    <div className={type === "center" ? styles.centerHeader : styles.header}>
      <h1
        className={
          type === "center" ? clsx(title, styles.centerHeaderTitle) : title
        }
      >
        {main}
      </h1>
      {sub && <span className={styles.explain}>{sub}</span>}
    </div>
  );
};

type MainIconProps = {
  children: ReactNode;
  type?: "success" | "fail";
};

Template.MainIcon = ({ children, type = "success" }: MainIconProps) => {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.imgBackDropCircle({ backgroundColor: type })} />
      {children}
    </div>
  );
};
