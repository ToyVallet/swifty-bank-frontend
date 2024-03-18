import Button from "@/_component/Button";
import styles from "./SendButton.css";

interface SendButtonProps {
  variant?: "active" | "disabled";
}

export default function SendButton({ variant = "active" }: SendButtonProps) {
  return (
    <div className={styles.wrapper}>
      <Button type="submit" variant={variant} className={styles.button}>
        송금
      </Button>
    </div>
  );
}
