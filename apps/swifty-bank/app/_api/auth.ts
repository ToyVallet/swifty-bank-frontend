import { CheckInfo } from "@/_api/type";
import URL from "@/_api/url";
import { get, post } from "@/_api/utils";

interface SMSResponse {
  isSuccess: boolean;
}

const signwithForm = async (pushedOrder: Number[], deviceId: string) => {
  const res = await post<{
    tokens: string;
    success: boolean;
    availablePassword: boolean;
  }>(URL.AUTH.signup, {
    pushedOrder,
    deviceId,
  });

  return res;
};

const signOut = async () => {
  const res = await post<{
    wasSignedOut: boolean;
  }>(URL.AUTH.signout, {});

  return res;
};

const reissueToken = async () => {
  const res = await post<{
    isSuccess: boolean;
    tokens: string;
  }>(URL.AUTH.reissue, {});

  return res;
};

const logout = async () => {
  const res = await post<{
    isSuccessful: boolean;
  }>(URL.AUTH.logout, {});
  return res;
};

const checkLoginAvailable = async (data: CheckInfo) => {
  const res = await post<{
    isAvailable: boolean;
    temporaryToken: string;
  }>(URL.AUTH.checkLoginAvailable, { ...data });

  return res;
};

const stealSMSCode = async (phoneNumber: string) => {
  const res = await post<SMSResponse>(URL.AUTH.stealCode, { phoneNumber });

  return res;
};

const sendSMSCode = async (phoneNumber: string) => {
  const res = await post<SMSResponse>(URL.AUTH.sendCode, { phoneNumber });

  return res;
};

const checkSMSCode = async (phoneNumber: string, verificationCode: string) => {
  const res = await post<SMSResponse>(URL.AUTH.checkCode, {
    phoneNumber,
    verificationCode,
  });

  return res;
};

const getKeypad = async () => {
  const res = await get<{
    keypad: string;
  }>(URL.AUTH.keypad, {}, "no-store");

  return res;
};

const auth = {
  signwithForm,
  signOut,
  reissueToken,
  logout,
  checkLoginAvailable,
  stealSMSCode,
  sendSMSCode,
  checkSMSCode,
  getKeypad,
};

export default auth;
