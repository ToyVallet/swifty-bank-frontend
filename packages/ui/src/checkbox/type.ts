export type TypeOfDetailInfo = "service" | "personalInfo" | "promotion";
export interface CheckBoxProp {
  labelContent: string;
  isCheck: boolean;
  isDetail: boolean;
  detailInfoType?: TypeOfDetailInfo;
}
