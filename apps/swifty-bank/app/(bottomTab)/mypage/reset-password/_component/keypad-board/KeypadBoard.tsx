import { motion, Variants } from "framer-motion";
import Template from "@/_component/Template";
import Back from "@icon/Icon_Back_Black.svg";
import KeyPad from "@/_component/keypad/KeyPad";
import { Stage } from "../../_type/stage";
import { useKeyPadBoard } from "../../_hook/useKeyPadBoard";
import styles from "./keypad-board.css";

const PASSWORD_LEGTH = 6;

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function KeypadBoard({
  stage,
  prevStage,
  nextStage,
}: {
  stage: Stage;
  prevStage: () => void;
  nextStage: () => void;
}) {
  const {
    password,
    rePassword,
    clickPassword,
    clickRePassword,
    backStage
  } = useKeyPadBoard(stage, prevStage, nextStage, PASSWORD_LEGTH);

  return (
    <>
      {stage === Stage.PASSWORD && (
        <motion.div
          layout
          key="password"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <Back onClick={backStage} className={styles.headerIcon} />
            <Template.Header
              main="비밀번호를 입력해주세요"
              sub={
                "3자리 이상 반복되거나 연속되지 않도록 \n 생년월일, 전화번호가 포함되지 않도록 입력해주세요."
              }
            />
            <KeyPad
              len={PASSWORD_LEGTH}
              password={password}
              onClick={clickPassword}
            />
          </Template>
        </motion.div>
      )}
      {stage === Stage.CHECK && (
        <motion.div
          layout
          key="check"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <Back onClick={backStage} className={styles.headerIcon} />
            <Template.Header
              main="비밀번호를 확인해주세요"
              sub={"설정한 비밀번호를 한번 더 입력해주세요"}
            />
            <KeyPad
              len={PASSWORD_LEGTH}
              password={rePassword}
              onClick={clickRePassword}
            />
          </Template>
        </motion.div>
      )}
    </>
  );
}
