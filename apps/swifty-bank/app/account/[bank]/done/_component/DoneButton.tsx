"use client";

import Button from "@/_component/Button";
import { useRouter } from "next/navigation";

export default function DoneButton() {
  const router = useRouter();
  const onClick = () => {
    router.replace("/");
  };
  return (
    <Button onClick={onClick} position="fixed">
      확인
    </Button>
  );
}
