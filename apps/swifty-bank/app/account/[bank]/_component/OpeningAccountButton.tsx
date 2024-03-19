"use client";

import Button from "@/_component/Button";
import { AccountProps } from "@/_utils/type";
import AccountCheckForm from "@/account/[bank]/_component/AccountCheckForm";
import { useBottomSheet } from "@swifty/hooks";
import { BottomSheet } from "@swifty/ui";

export default function OpeningAccountButton({ bank }: AccountProps) {
  const { open, close, isOpen } = useBottomSheet();
  return (
    <>
      <Button position="fixed" onClick={open}>
        계좌 개설하기
      </Button>
      {isOpen && (
        <BottomSheet
          open={isOpen}
          onDismiss={close}
          header={"계좌 개설을 위한 동의가 필요해요"}
        >
          <AccountCheckForm bank={bank} />
        </BottomSheet>
      )}
    </>
  );
}
