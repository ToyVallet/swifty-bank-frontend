const id = (front: string, back: string) => {
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

const phoneNumber = (pn: string): boolean => {
  // 010을 포함한 11자리 숫자인지 확인
  const regex = /^010\d{8}$/;
  return regex.test(pn);
};

const username = (name: string): boolean => {
  // 한글 또는 영어로 2글자 이상인지 확인
  const regex = /^[가-힣a-zA-Z]{2,}$/;
  return regex.test(name);
};

const validator = {
  id,
  phoneNumber,
  username,
};

export default validator;
