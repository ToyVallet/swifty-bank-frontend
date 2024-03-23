import Image from "next/image";
import Link from "next/link";
import styles from "@/account/_component/accounts.css";

export default function Accounts() {
  return (
    <ul className={styles.container}>
      <Link href={"/account/seed-bank"}>
        <li className={styles.list}>
          <Image
            src="/img/account/bank.png"
            width={57}
            height={57}
            alt="bank"
          />
          <div>
            <h3 className={styles.title}>내일의 씨앗 파킹 통장</h3>
            <span className={styles.detail}>
              파킹 통장 이자 0.2%, 씨앗 은행 파킹 통장
            </span>
          </div>
        </li>
      </Link>
      <Link href={"/account/seed-bank"}>
        <li className={styles.list}>
          <Image
            src="/img/account/bank.png"
            width={57}
            height={57}
            alt="bank"
          />
          <div>
            <h3 className={styles.title}>내일의 씨앗 파킹 통장</h3>
            <span className={styles.detail}>
              파킹 통장 이자 0.2%, 씨앗 은행 파킹 통장
            </span>
          </div>
        </li>
      </Link>
      <Link href={"/account/seed-bank"}>
        <li className={styles.list}>
          <Image
            src="/img/account/bank.png"
            width={57}
            height={57}
            alt="bank"
          />
          <div>
            <h3 className={styles.title}>내일의 씨앗 파킹 통장</h3>
            <span className={styles.detail}>
              파킹 통장 이자 0.2%, 씨앗 은행 파킹 통장
            </span>
          </div>
        </li>
      </Link>
    </ul>
  );
}
