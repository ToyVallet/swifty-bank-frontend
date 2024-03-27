import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BottomSheet } from "@swifty/ui";
import { useBottomSheet } from "@swifty/hooks";
import { SubmitHandler } from "react-hook-form";
import CheckForm, { FormData } from "@/signup/_component/check-form/CheckForm";
import RightIcon from "/public/icon/rightIcon.svg";
import clsx from "clsx";
import styles from "./mypage-nav.css";

export function MypageNav() {
  const { isOpen, open, close } = useBottomSheet();
  const pathname = usePathname();
  const { replace } = useRouter();

  const showWithdrawAgreement = () => {
    open();
  }

  const checkDetails = ({ personalInfo, service }: FormData) => {
    return personalInfo && service;
  }

  const submitWithdrawAccount: SubmitHandler<FormData> = async (data: FormData) => {
    if (!checkDetails(data))
      return;
    replace(`${pathname}/withdraw-account`);
  }

  const logout = async () => {
  }

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link
          href={`${pathname}/reset-password`}
          className={styles.flexWrapper}
        >
          비밀번호 변경
          <RightIcon />
        </Link>
      </li>
      <li className={styles.item}>
        <button
          onClick={logout}
          className={clsx(styles.flexWrapper, styles.button)}
        >
          로그아웃
          <RightIcon />
        </button>
      </li>
      <li className={clsx(styles.item, styles.lastItem)}>
        <button
          onClick={showWithdrawAgreement}
          className={clsx(styles.flexWrapper, styles.button, styles.withdrawButton)}
        >
          탈퇴하기
          <RightIcon />
        </button>
      </li>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
        header="Swifty를 탈퇴하시려면 동의가 필요해요"
        height="auto"
      >
        <CheckForm submit={submitWithdrawAccount} />
      </BottomSheet>
    </ul>
  );
}
