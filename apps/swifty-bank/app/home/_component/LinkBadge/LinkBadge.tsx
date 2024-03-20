import clsx from "clsx";
import Link from "next/link";
import styles from "./LinkBadge.css";

interface LinkBadgeProps {
  href: string;
  children: string;
  className?: string;
  type?: "primary" | "secondary";
}

export default function LinkBadge({
  href,
  children,
  className,
  type = "primary",
}: LinkBadgeProps) {
  return (
    <div
      className={clsx(
        styles.common,
        {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
        },
        className,
      )}
    >
      <Link href={href} className={styles.text}>
        {children}
      </Link>
    </div>
  );
}
