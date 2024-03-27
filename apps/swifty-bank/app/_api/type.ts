export interface User {
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE";
  birthDate: string;
  nationality: string;
  customerStatus: "ACTIVE" | "INACTIVE";
}

export interface CheckInfo extends Pick<User, "name" | "phoneNumber"> {
  residentRegistrationNumber: string;
  mobileCarrier: MobileCarrier;
}

export type MobileCarrier =
  | "SKT"
  | "KT"
  | "LGU+"
  | "SKT 알뜰폰"
  | "KT 알뜰폰"
  | "LGU+ 알뜰폰";
