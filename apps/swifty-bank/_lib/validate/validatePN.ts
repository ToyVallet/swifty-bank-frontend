const validatePN = (pn: string): boolean => {
  // 11자리 숫자인지 확인
  const regex = /^[0-9]{11}$/;
  return regex.test(pn);
};

export default validatePN;
