import { useState } from "react";

type UseInputHook = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

type Validator = (value: string) => boolean;

const defaultValidator = () => true;

const useInput = (
  initialValue: string,
  validator: Validator = defaultValidator,
): UseInputHook => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: validate input 로직 추가
    // if (!validator(event.target.value)) {
    //   return;
    // }
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange, reset };
};

export default useInput;
