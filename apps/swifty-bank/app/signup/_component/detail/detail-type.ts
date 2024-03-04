import { TypeOfDetailInfo } from "@/_utils/type";

interface TermsOfDetail {
  type: TypeOfDetailInfo;
  title: string;
  content: string;
  list: {
    title: string;
    content: string;
    id: number;
    detail?: string;
  }[];
}

export const termsOfDetails: TermsOfDetail[] = [
  {
    type: "service",
    title: "[필수] 서비스 이용약관 동의",
    content:
      "개인정보의 수집·이용에 관한 동의를 거부하실 수 있습니다. 다만, 본동의는 '인증서 등록'을 위한 필수적인 사항이므로 동의를 거부하시는 경우 업무 수행이 불가능 할 수 있습니다.",
    list: [
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
    title: "[선택] 프로모션 안내 동의",
    content:
      "개인정보의 수집·이용에 관한 동의를 거부하실 수 있습니다. 다만, 본동의는 '인증서 등록'을 위한 필수적인 사항이므로 동의를 거부하시는 경우 업무 수행이 불가능 할 수 있습니다.",

    list: [
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
    title: "[필수] 개인정보 처리방침 동의",
    content:
      "개인정보의 수집·이용에 관한 동의를 거부하실 수 있습니다. 다만, 본동의는 '인증서 등록'을 위한 필수적인 사항이므로 동의를 거부하시는 경우 업무 수행이 불가능 할 수 있습니다.",

    list: [
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
