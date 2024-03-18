import clsx from "clsx";
import styles from "./Card.css";

type CardProps = {
  className?: string;
  cardType: "Banner" | "List" | "Link";
  children: React.ReactNode;
};

export default function Card({ cardType, children, className }: CardProps) {
  return (
    <div
      className={clsx(styles.common, className, {
        [styles.banner]: cardType === "Banner",
        [styles.list]: cardType === "List",
        [styles.link]: cardType === "Link",
      })}
    >
      {children}
    </div>
  );
}
