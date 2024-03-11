import URL from "./url";
import { postWithToken } from "./utils";

interface SMSResponse {
  isSuccess: true;
}

// SMS 인증 API
const sendSMSCode = async (phoneNumber: string, temporaryToken: string) => {
  try {
    const res = await postWithToken<SMSResponse>(
      URL.SMS.sendCode,
      { phoneNumber },
      temporaryToken,
    );

    return res;
  } catch (error) {
    throw new Error(
      "인증번호 전송에 실패했습니다. 요청한 번호를 다시 확인해주세요.",
    );
  }
};

const checkSMSCode = async (
  temporaryToken: string,
  phoneNumber: string,
  verficationCode: string,
) => {
  try {
    const res = await postWithToken<SMSResponse>(
      URL.SMS.checkCode,
      {
        phoneNumber,
        verficationCode,
      },
      temporaryToken,
    );

    return res;
  } catch (error) {
    throw new Error("인증번호 확인에 실패했습니다.");
  }
};

const sms = {
  sendSMSCode,
  checkSMSCode,
};

export default sms;
