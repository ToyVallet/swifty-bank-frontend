import { motion } from "framer-motion";
import { inputMotion } from "../motion";
import { SignupStage } from "@/signup/form/_lib/validate/isActiveButton";
import { Input } from "@swifty/ui";

interface InputNameProps {
  stage: number;
  className: string;
  username: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

function InputName({ stage, className, username }: InputNameProps) {
  return (
    <motion.div
      key={"이름"}
      className={className}
      initial={inputMotion.initial}
      animate={{ opacity: stage >= SignupStage["이름"] ? 1 : 0 }}
      transition={inputMotion.transition}
      exit={inputMotion.exit}
    >
      <Input label="이름">
        <Input.Text
          autoComplete="name"
          pattern="^[^\d]*$"
          title="숫자는 입력할 수 없습니다."
          defaultValue={username.value}
          autoFocus
          {...username}
        />
      </Input>
    </motion.div>
  );
}

export default InputName;
