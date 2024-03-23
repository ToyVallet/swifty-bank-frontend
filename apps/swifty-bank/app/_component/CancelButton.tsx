"use client";

import { useRouter } from "next/navigation";
import Cancel from "@icon/Icon_Cancellation.svg";
import styles from "@/_component/cancelButton.css";

type Props = {
  href?: string;
};

export default function CancelButton({ href }: Props) {
  const router = useRouter();
  const onClick = () => {
    if (href) {
      router.replace(href);
    }
    router.back();
  };
  return <Cancel onClick={onClick} className={styles.cancelButton} />;
}
