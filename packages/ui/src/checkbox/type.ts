export type TypeOfDetailInfo = "service" | "personalInfo" | "promotion";
export interface CheckBoxProp {
  labelContent: string;
  optional: boolean;
  isCheck: boolean;
  isDetail: boolean;
  detailInfoType?: TypeOfDetailInfo;
}
