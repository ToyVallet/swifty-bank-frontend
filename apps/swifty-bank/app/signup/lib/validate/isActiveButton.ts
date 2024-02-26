import { validateID, validatePN } from "./validator";
export interface FormData {
  phoneNumber: string | null;
  telecomProvider: string;
  idNumberFront: string;
  idNumberBack: string;
  username: string;
}

export type SignupStage = "휴대폰번호" | "통신사" | "주민등록번호" | "이름";

export const stages: SignupStage[] = [
  "휴대폰번호",
  "통신사",
  "주민등록번호",
  "이름",
];

const isActiveButton = (signupStage: SignupStage, formData: FormData) => {
  const validation = {
    휴대폰번호: [
      (formData: FormData) => validatePN(formData.phoneNumber ?? ""),
    ],
    통신사: [(formData: FormData) => formData.telecomProvider !== ""],
    주민등록번호: [
      (formData: FormData) =>
        validateID(formData.idNumberFront, formData.idNumberBack),
    ],
    이름: [(formData: FormData) => formData.username !== ""],
  };

  return stages
    .slice(0, stages.indexOf(signupStage) + 1)
    .every((stage) => validation[stage].every((fn) => fn(formData)));
};

export default isActiveButton;
