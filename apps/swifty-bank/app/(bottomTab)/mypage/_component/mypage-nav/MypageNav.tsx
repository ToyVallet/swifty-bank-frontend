import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BottomSheet } from "@swifty/ui";
import { useBottomSheet } from "@swifty/hooks";
import { SubmitHandler } from "react-hook-form";
import CheckForm, { FormData } from "@/(bottomTab)/mypage/_component/check-form/CheckForm";
import RightIcon from "/public/icon/rightIcon.svg";
import clsx from "clsx";
import styles from "./mypage-nav.css";
import auth from "@/_api/auth";

export function MypageNav() {
  const { isOpen, open, close } = useBottomSheet();
  const pathname = usePathname();
  const { replace } = useRouter();

  const showWithdrawAgreement = () => {
    open();
  }

  const checkDetails = ({ collection, use, provide }: FormData) => {
    return collection && use && provide;
  }

  const submitWithdrawAccount: SubmitHandler<FormData> = async (data: FormData) => {
    if (!checkDetails(data))
      return;
    const { isSuccess } = await auth.signOut();
    if (isSuccess)
      replace(`${pathname}/withdraw-account`);
  }

  const logout = async () => {
    await auth.logout();
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
        header="Swifty를 탈퇴하기 전 동의가 필요해요"
        height="auto"
      >
        <CheckForm submit={submitWithdrawAccount} />
      </BottomSheet>
    </ul>
  );
}