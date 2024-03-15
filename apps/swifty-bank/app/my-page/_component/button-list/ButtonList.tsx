import { HTMLAttributes, useEffect, useState } from "react";
import { useBottomSheet } from "@swifty/hooks";
import { BottomSheet } from "@swifty/ui";
import GlobalButton from "@/_component/Button";
import { AgreementType } from "@/my-page/_type/agreement";
import { Button } from "@/my-page/_component/button/Button";
import { Checkbox } from "@/my-page/_component/checkbox/Checkbox";
import styles from "./button-list.css";


interface ButtonListProps extends HTMLAttributes<HTMLUListElement> {
  agreements: AgreementType[];
}

export function ButtonList({
  agreements,
}: ButtonListProps) {
  const { isOpen, open, close } = useBottomSheet();
  const [checkList, setCheckList] = useState(Array(agreements.length).fill(false));

  const checkButtonVarint = () => {
    return agreements.every(({ required }, idx) =>
      (required ? required === checkList[idx] : true));
  }

  const handleCheckList = (checkedIdx: number) => {
    setCheckList(checkList.map((check, idx) => (checkedIdx === idx) ? !check : check));
  }

  useEffect(() => {
    if (!isOpen)
      setCheckList(Array(agreements.length).fill(false));
  }, [isOpen]);

  const deleteAccount = () => {
    open();
  }

  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Button label='비밀번호 변경' />
      </li>
      <li className={styles.item}>
        <Button label='로그아웃하기' />
      </li>
      <li className={styles.item}>
        <Button
          label='탈퇴하기'
          onClick={deleteAccount}
        />
      </li>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
        header="Swifty를 탈퇴하시려면 동의가 필요해요"
        height="auto"
      >
        <ul className={styles.checkboxList}>
          {agreements.map(({ required, text }, idx) => (
            <li className={styles.checkboxItem} key={text}>
              <Checkbox
                checked={checkList[idx]}
                label={required ? `[필수] ${text}` : `[선택] ${text}`}
                onChange={() => handleCheckList(idx)}
              />
            </li>
          ))}
        </ul>
        <GlobalButton
          variant={checkButtonVarint() ? 'active' : 'disabled'}
        >
          동의하기
        </GlobalButton>
      </BottomSheet>
    </ul>
  );
}
