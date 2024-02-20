import { useCallback, useState } from "react";

type UseInputHook = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

const useInput = (initialValue: string): UseInputHook => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, onChange, reset };
};

export default useInput;
