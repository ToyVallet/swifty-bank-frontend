import { Input } from "@swifty/ui";
import { useEffect, useState } from "react";

interface InputPhoneNumberProps {
  className: string;
  phoneNumber: { value: string; setValue: (value: string) => void };
}

function InputPhoneNumber({ phoneNumber, className }: InputPhoneNumberProps) {
  const [pnError, setPnError] = useState(false);

  useEffect(() => {
    if (pnError) {
      const timerId = setTimeout(() => {
        setPnError(false);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [pnError]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !["Backspace", "Enter", "Tab", "ArrowLeft", "ArrowRight"].includes(
        e.key,
      ) &&
      isNaN(Number(e.key))
    ) {
      e.preventDefault();
      setPnError(true);
    }
    return;
  };

  const handlePNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = e.target.value.replace(/[^0-9]/g, "");
    phoneNumber.setValue(formatted);
  };

  return (
    <div key={"휴대폰 번호"} className={className}>
      <Input label="휴대폰 번호">
        <Input.Text
          value={phoneNumber.value}
          onChange={handlePNChange}
          autoComplete="tel"
          inputMode="tel"
          maxLength={11}
          pattern="\d*"
          title="숫자만 입력해주세요."
          autoFocus
          onKeyDown={handleKeyDown}
          error={pnError}
          defaultValue={phoneNumber.value}
        />
      </Input>
    </div>
  );
}

export default InputPhoneNumber;
