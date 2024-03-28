import { TypeOfWithdrawalInfo } from "@/_utils/type";

interface ITermsOfWithdrawal {
  type: TypeOfWithdrawalInfo;
  title: string;
  content: string;
  list: {
    title: string;
    content: string;
    id: number;
    detail?: string;
  }[];
}

export const TermsOfWithdrawal: ITermsOfWithdrawal[] = [
  {
    type: "collection",
    title: "[필수] 수집 동의 철회",
    content: "귀하가 서비스 이용 과정에서 제공한 수집, 이용, 제공에 대한 동의는 서비스 탈퇴를 통해 자동으로 철회되며, 이로 인해 모든 개인정보 처리가 종료됩니다.",
    list: [
      {
        title: "1. 탈퇴 시 자동 철회",
        content: "• 서비스 탈퇴 시 귀하가 이전에 제공한 동의가 철회됩니다.",
        id: 1,
      },
      {
        title: "2. 파기 항목 개인(신용)",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 2,
      },
      {
        title: "3. 서비스 이용 불가",
        content: "• 탈퇴를 통해 개인정보 처리방침 동의가 철회되면, 모든 서비스 이용이 즉시 종료됩니다.",
        id: 3,
      },
    ],
  },
  {
    type: "use",
    title: "[필수] 이용 동의 철회",
    content: "귀하가 서비스 이용 과정에서 제공한 수집, 이용, 제공에 대한 동의는 서비스 탈퇴를 통해 자동으로 철회되며, 이로 인해 모든 개인정보 처리가 종료됩니다.",
    list: [
      {
        title: "1. 탈퇴 시 자동 철회",
        content: "• 서비스 탈퇴 시 귀하가 이전에 제공한 동의가 철회됩니다.",
        id: 1,
      },
      {
        title: "2. 파기 항목 개인(신용)",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 2,
      },
      {
        title: "3. 서비스 이용 불가",
        content: "• 탈퇴를 통해 개인정보 처리방침 동의가 철회되면, 모든 서비스 이용이 즉시 종료됩니다.",
        id: 3,
      },
    ],
  },
  {
    type: "provide",
    title: "[필수] 제공 동의 철회",
    content: "귀하가 서비스 이용 과정에서 제공한 수집, 이용, 제공에 대한 동의는 서비스 탈퇴를 통해 자동으로 철회되며, 이로 인해 모든 개인정보 처리가 종료됩니다.",
    list: [
      {
        title: "1. 탈퇴 시 자동 철회",
        content: "• 서비스 탈퇴 시 귀하가 이전에 제공한 동의가 철회됩니다.",
        id: 1,
      },
      {
        title: "2. 파기 항목 개인(신용)",
        content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
        id: 2,
      },
      {
        title: "3. 서비스 이용 불가",
        content: "• 탈퇴를 통해 개인정보 처리방침 동의가 철회되면, 모든 서비스 이용이 즉시 종료됩니다.",
        id: 3,
      },
    ],
  },
];
