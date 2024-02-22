import { validateID, validatePN } from "./validator";

export interface FormData {
  phoneNumber: string;
  telecomProvider: string;
  idNumberFront: string;
  idNumberBack: string;
  username: string;
}

export type SignupStage = 0 | 1 | 2 | 3;

const isActiveButton = (signupStage: SignupStage, formData: FormData) => {
  if (signupStage === 0) {
    return validatePN(formData.phoneNumber);
  }

  if (signupStage === 1) {
    return validatePN(formData.phoneNumber) && formData.telecomProvider !== "";
  }

  if (signupStage === 2) {
    return (
      validatePN(formData.phoneNumber) &&
      formData.telecomProvider !== "" &&
      validateID(formData.idNumberFront, formData.idNumberBack)
    );
  }

  if (signupStage === 3) {
    return (
      validatePN(formData.phoneNumber) &&
      formData.telecomProvider !== "" &&
      validateID(formData.idNumberFront, formData.idNumberBack) &&
      formData.username !== ""
    );
  }

  return false;
};

export default isActiveButton;
