const telecomServiceProvider = [
  { value: "SKT", label: "SKT" },
  { value: "KT", label: "KT" },
  { value: "LG", label: "LG" },
  { value: "SKT 알뜰폰", label: "SKT 알뜰폰" },
  { value: "KT 알뜰폰", label: "KT 알뜰폰" },
  { value: "LG 알뜰폰", label: "LG 알뜰폰" },
];

export type SelectOption<T> = {
  label: string;
  value: T;
};

export default telecomServiceProvider;
