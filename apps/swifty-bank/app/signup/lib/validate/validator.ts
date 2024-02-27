export const validateID = (front: string, back: string) => {
  const yymmddRegex =
    /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/;

  if (!yymmddRegex.test(front)) {
    return false;
  }

  const backIDRegex = /^[1-4]{1}$/;

  if (!backIDRegex.test(back)) {
    return false;
  }

  return true;
};

export const validatePN = (pn: string): boolean => {
  // 11자리 숫자인지 확인
  const regex = /^\d{11}$/;
  return regex.test(pn);
};
