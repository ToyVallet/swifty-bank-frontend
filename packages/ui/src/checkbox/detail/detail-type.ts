import { TypeOfDetailInfo } from "../type";

interface TermsOfDetail {
  type: TypeOfDetailInfo;
  data: {
    title: string;
    content: string;
    id: number;
    detail?: string;
  }[];
}

export const termsOfDeatils: TermsOfDetail[] = [
  {
    type: "service",
    data: [
      {
        title: "1. 수집·이용 목적",
        content: "• Swify 홈페이지/모바일 서비스 이용을 위한 인증서 등록",
        id: 1,
      },
      {
        title: "2. 보유 및 이용기간",
        content: "• 서비스 목적 달성시 즉시 파기",
        detail:
          "(단, 관련법령에 따라 보존의무가 있는 경우는 해당 보존기간까지 보관)",
        id: 2,
      },
      {
        title: "3. 수집·이용 항목 개인(신용)정보",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 3,
      },
    ],
  },
  {
    type: "promotion",
    data: [
      {
        title: "1. 수집·이용 목적",
        content: "• Swify 홈페이지/모바일 서비스 이용을 위한 인증서 등록",
        id: 1,
      },
      {
        title: "2. 보유 및 이용기간",
        content: "• 서비스 목적 달성시 즉시 파기",
        detail:
          "(단, 관련법령에 따라 보존의무가 있는 경우는 해당 보존기간까지 보관)",
        id: 2,
      },
      {
        title: "3. 수집·이용 항목 개인(신용)정보",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 3,
      },
    ],
  },
  {
    type: "personalInfo",
    data: [
      {
        title: "1. 수집·이용 목적",
        content: "• Swify 홈페이지/모바일 서비스 이용을 위한 인증서 등록",
        id: 1,
      },
      {
        title: "2. 보유 및 이용기간",
        content: "• 서비스 목적 달성시 즉시 파기",
        detail:
          "(단, 관련법령에 따라 보존의무가 있는 경우는 해당 보존기간까지 보관)",
        id: 2,
      },
      {
        title: "3. 수집·이용 항목 개인(신용)정보",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 3,
      },
    ],
  },
];
