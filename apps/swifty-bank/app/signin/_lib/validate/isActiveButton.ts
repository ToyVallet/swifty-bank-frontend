import validateID from "./validateID";
import validatePN from "./validatePN";

interface FormData {
  phoneNumber: string;
  telecomProvider: string;
  idNumberFront: string;
  idNumberBack: string;
  username: string;
}

export type SigninStage = 0 | 1 | 2 | 3;

const isActiveButton = (
  signinStage: SigninStage,
  formData: FormData,
): boolean => {
  if (signinStage === 0) {
    return validatePN(formData.phoneNumber);
  }

  if (signinStage === 1) {
    return validatePN(formData.phoneNumber) && formData.telecomProvider !== "";
  }

  if (signinStage === 2) {
    return (
      validatePN(formData.phoneNumber) &&
      formData.telecomProvider !== "" &&
      validateID(formData.idNumberFront, formData.idNumberBack)
    );
  }

  if (signinStage === 3) {
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
