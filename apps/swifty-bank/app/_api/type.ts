export interface User {
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthDate: string;
  nationality: string;
}

export interface CheckInfo extends Pick<User, "name" | "phoneNumber"> {
  residentRegistrationNumber: string;
  mobileCarrier: MobileCarrier;
}

type MobileCarrier =
  | "SKT"
  | "KT"
  | "LGU+"
  | "SKT 알뜰폰"
  | "KT 알뜰폰"
  | "LGU+ 알뜰폰";
