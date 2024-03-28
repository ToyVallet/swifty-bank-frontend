"use client";
import { MyPageBoard } from "@/(bottomTab)/mypage/_component/mypage-board/MyPageBoard";
import { useCustomerInfo } from "@/(bottomTab)/mypage/_hook/useCustomerInfo";

export default function MyPageOfPage() {
  const customerInfo = useCustomerInfo();
  return (
    <MyPageBoard customerInfo={customerInfo} />
  );
}
