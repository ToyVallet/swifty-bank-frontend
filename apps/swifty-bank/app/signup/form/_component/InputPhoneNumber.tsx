import { Input } from "@swifty/ui";
import { useState } from "react";

function InputPhoneNumber({
  phoneNumber,
  className,
}: {
  className: string;
  phoneNumber: { value: string; setValue: (value: string) => void };
}) {
  const [pnError, setPnError] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !["Backspace", "Enter", "Tab"].includes(e.key) &&
      isNaN(Number(e.key))
    ) {
      e.preventDefault();
      setPnError(true);
    }
    setTimeout(() => setPnError(false), 1000);
    return;
  };

  const handlePNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = e.target.value.replace(/[^0-9]/g, "");
    phoneNumber.setValue(formatted);
  };

  return (
    <div key={"휴대폰번호"} className={className}>
      <Input label="휴대폰번호">
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
