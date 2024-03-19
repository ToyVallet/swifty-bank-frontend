"use client";

import KeyPad from "@/_component/keypad/KeyPad";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import useKeyPad from "@/_hook/useKeyPad";

const PASSWORD_LENGTH = 6;
/* 
각 페이지에서 유동적으로 해당 페이지에서 사용하기 위해 
searchparams로 to를 지정하면 좋을 것 같습니다!
해당 to 방향으로 이동해서 이동 경로를 조정할 수 있으면 좋을 것 같습니다.
*/
export default function KeyPads() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const to = searchParams.get("to");
  const [key, , handleClick] = useKeyPad(PASSWORD_LENGTH);

  // checkPassword
  useEffect(() => {
    if (key.length === PASSWORD_LENGTH) router.push(`/${to}`);
  }, [key]);

  return <KeyPad len={PASSWORD_LENGTH} password={key} onClick={handleClick} />;
}
