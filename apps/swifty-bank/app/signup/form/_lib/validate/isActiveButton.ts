import validator from "@/signup/form/_lib/validate/validator";
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
    (formData: FormData) => validator.phoneNumber(formData.phoneNumber ?? ""),
    (formData: FormData) => formData.telecomProvider !== "",
    (formData: FormData) => validator.id(formData.idFront, formData.idBack),
    (formData: FormData) => validator.username(formData.username),
  ];

  return validation.slice(0, stage + 1).every((fn) => fn(formData));
};

export default isActiveButton;
