import { AnchorHTMLAttributes } from "react"
import Link from "next/link"
import LogoIcon from "/public/icon/layer_1.svg";
import { Heading } from "@swifty/ui";
import clsx from "clsx";
import styles from "./logo.css";

interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href={`#`} className={clsx(styles.logo, className)}>
      <LogoIcon />
      <Heading className={styles.heading1}>swifty</Heading>
    </Link>
  );
}

