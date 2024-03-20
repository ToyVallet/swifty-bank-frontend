import useKeyPad from "@/_hook/useKeyPad";
import { useRouter } from "next/navigation";
import { Stage } from "@/(bottomTab)/mypage/reset-password/_type/stage";
import { useCallback, useEffect } from "react";

export const useKeyPadBoard = (
  stage: Stage,
  prevStage: () => void,
  nextStage: () => void,
  passwordLength: number,
) => {
  const router = useRouter();
  const [password, setPassword, clickPassword] = useKeyPad(passwordLength);
  const [rePassword, setRePassword, clickRePassword] = useKeyPad(passwordLength);

  const initPasswords = useCallback(() => {
    setPassword([]);
    setRePassword([]);
  }, []);

  const backStage = useCallback(() => {
    initPasswords();
    if (stage === Stage.PASSWORD) {
      router.push(`/mypage`);
      return;
    }
    prevStage();
  }, [stage]);

  useEffect(() => {
    if (password.length === passwordLength)
      nextStage();
  }, [password, passwordLength]);

  useEffect(() => {
    if (rePassword.length !== passwordLength)
      return;
    if (password.join('') === rePassword.join('')) {
      return;
    }
    if (password.join('') !== rePassword.join('')) {
      backStage();
      return;
    }
  }, [password, rePassword, passwordLength]);

  return {
    password,
    rePassword,
    clickPassword,
    clickRePassword,
    backStage,
  };
}
