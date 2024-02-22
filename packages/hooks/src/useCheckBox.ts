import { CheckBoxProp } from "./type/type";
import { useState, useCallback } from "react";

export default function useCheckBox(data: CheckBoxProp[]) {
  const [terms, setTerms] = useState(data);

  const onChange = useCallback((isCheck: boolean, id: number) => {
    const cloneTerms = [...terms];
    cloneTerms[id]!.isCheck = !isCheck;
    setTerms(cloneTerms);
  }, []);

  return {
    terms,
    onChange,
  };
}
