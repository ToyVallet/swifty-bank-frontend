export const validateID = (front: string, back: string) => {
  if (front.length !== 6) return false;

  if (back.length !== 1) return false;

  if (Number(front) <= 0) return false;

  if (!Number.isInteger(Number(front))) return false;

  if (Number.isNaN(Number(front))) return false;

  if (Number.isNaN(Number(back))) return false;

  return true;
};

export const validatePN = (pn: string): boolean => {
  // 11자리 숫자인지 확인
  const regex = /^[0-9]{11}$/;
  return regex.test(pn);
};
