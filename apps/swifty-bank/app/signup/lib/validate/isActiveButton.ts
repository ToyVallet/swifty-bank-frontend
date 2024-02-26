import { validateID, validatePN } from "./validator";
export interface FormData {
  phoneNumber: string | null;
  telecomProvider: string;
  idFront: string;
  idBack: string;
  username: string;
}

export enum SignupStage {
  "휴대폰번호",
  "통신사",
  "주민등록번호",
  "이름",
}

export type Stage = 0 | 1 | 2 | 3;

const isActiveButton = (stage: Stage, formData: FormData) => {
  const validation = [
    (formData: FormData) => validatePN(formData.phoneNumber ?? ""),
    (formData: FormData) => formData.telecomProvider !== "",
    (formData: FormData) => validateID(formData.idFront, formData.idBack),
    (formData: FormData) => formData.username !== "",
  ];

  return validation
    .slice(0, stage + 1)
    .every((validator) => validator(formData));
};

export default isActiveButton;
