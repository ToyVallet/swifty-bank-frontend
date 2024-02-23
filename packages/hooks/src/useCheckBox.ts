import { CheckBoxProp } from "./type/type";
import { useState, useCallback } from "react";

export default function useCheckBox(data: CheckBoxProp[]) {
  const [terms, setTerms] = useState(data);

  const onChange = (isCheck: boolean, id: number) => {
    const cloneTerms = [...terms];
    const term = cloneTerms[id];
    if (typeof term === "object") {
      term.isCheck = !isCheck;
      setTerms(cloneTerms);
    }
  };

  return {
    terms,
    onChange,
  };
}
