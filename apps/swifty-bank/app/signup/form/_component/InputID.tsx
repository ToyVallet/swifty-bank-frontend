import { motion } from "framer-motion";
import { inputMotion } from "@/signup/form/motion";
import { SignupStage } from "@/signup/form/_lib/validate/isActiveButton";
import { Input } from "@swifty/ui";
import Ellipsis from "@icon/signup/ellipsis.svg";
import Hyphen from "@icon/signup/hyphen.svg";
import styles from "./InputID.css";

interface InputIDProps {
  className: string;
  stage: number;
  idFront: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  idBack: {
    ref: React.RefObject<HTMLInputElement>;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

function InputID({ className, stage, idFront, idBack }: InputIDProps) {
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (idFront.value.length === 6) {
      e.preventDefault();
      idBack.ref.current?.focus();
    }
  };

  return (
    <motion.div
      key="주민등록번호"
      className={className}
      initial={inputMotion.initial}
      animate={{
        opacity: stage >= SignupStage["주민등록번호"] ? 1 : 0,
      }}
      transition={inputMotion.transition}
      exit={inputMotion.exit}
    >
      <label htmlFor="personalId" className={styles.idLabel}>
        주민등록번호
      </label>
      <div className={styles.idInputBox}>
        <div className={styles.idInputFront}>
          <Input {...idFront}>
            <Input.Text
              id="personalId"
              maxLength={6}
              inputMode="numeric"
              placeholder="생년월일"
              pattern="\d*"
              title="숫자만 입력해주세요."
              defaultValue={idFront.value}
              autoFocus
              onKeyUp={onKeyUp}
            />
          </Input>
        </div>

        <div className={styles.idInputHyphen}>
          <Hyphen />
        </div>

        <div className={styles.idInputBackBox}>
          <motion.input
            className={styles.idInputBack}
            {...idBack}
            maxLength={1}
            inputMode="numeric"
            placeholder="0"
            pattern="\d*"
            title="숫자만 입력해주세요."
            defaultValue={idBack.value}
            ref={idBack.ref}
            whileTap={{ scale: 0.95, transition: { duration: 0.08 } }}
          />
          <Ellipsis />
        </div>
      </div>
    </motion.div>
  );
}

export default InputID;
