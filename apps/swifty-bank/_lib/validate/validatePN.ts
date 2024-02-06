const validatePN = (pn: string): boolean => {
  const regex = /^[0-9]{11}$/;
  return regex.test(pn);
};

export default validatePN;
