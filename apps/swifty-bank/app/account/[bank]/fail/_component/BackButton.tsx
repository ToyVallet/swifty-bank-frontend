"use client";

import Button from "@/_component/Button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const onClick = () => {
    router.replace("/account");
  };
  return (
    <Button onClick={onClick} position="fixed">
      처음으로 돌아가기
    </Button>
  );
}
