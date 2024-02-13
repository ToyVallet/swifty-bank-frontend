const validateID = (front: string, back: string) => {
  if (front.length !== 6) return false;

  if (back.length !== 1) return false;

  if (isNaN(Number(front))) return false;

  if (isNaN(Number(back))) return false;

  return true;
};

export default validateID;
