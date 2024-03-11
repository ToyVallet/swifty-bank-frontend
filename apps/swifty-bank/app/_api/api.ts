import URL from "@/_api/url";
import { CheckInfo, User } from "./type";
import {
  getWithToken,
  patchWithToken,
  postWithToken,
  postWithoutToken,
} from "./util";

// SMS 인증 API
const sendSMSCode = async (phoneNumber: string, temporaryToken: string) => {
  try {
    const res = await postWithToken<{
      isSuccess: boolean;
    }>(URL.SMS.sendCode, { phoneNumber }, temporaryToken);

    return res;
  } catch (error) {
    throw new Error("인증번호 전송에 실패했습니다. client 설정을 확인해주세요");
  }
};

const checkSMSCode = async (
  temporaryToken: string,
  phoneNumber: string,
  verficationCode: string,
) => {
  try {
    const res = await postWithToken<{
      isSuccess: boolean;
    }>(URL.SMS.checkCode, { phoneNumber, verficationCode }, temporaryToken);

    return res;
  } catch (error) {
    throw new Error("인증번호 확인에 실패했습니다.");
  }
};

// 회원 API
const checkPassword = async (accessToken: string, password: string) => {
  try {
    const res = await postWithToken<{
      message: String;
    }>(URL.USER.password, { password }, accessToken);

    return res;
  } catch (error) {
    throw new Error("비밀번호 일치여부 확인에 실패했습니다.");
  }
};

const changePassword = async (accessToken: string, password: string) => {
  try {
    const res = await patchWithToken<{
      message: string;
    }>(URL.USER.password, { password }, accessToken);

    return res;
  } catch (error) {
    throw new Error("비밀번호 변경에 실패했습니다.");
  }
};

const getUser = async (accessToken: string) => {
  try {
    const res = await getWithToken<{
      password: string;
    }>(URL.USER.info, accessToken);

    return res;
  } catch (error) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }
};

const updateUser = async (accessToken: string, data: User) => {
  try {
    const res = await patchWithToken<User>(
      URL.USER.info,
      { ...data },
      accessToken,
    );

    return res;
  } catch (error) {
    throw new Error("유저 정보를 업데이트하는데 실패했습니다.");
  }
};

// Authentication API
const signwithForm = async (
  temporaryToken: string,
  pushedOrder: Number[],
  deviceId: string,
) => {
  try {
    const res = await postWithToken<{
      tokens: string;
      success: boolean;
      availablePassword: boolean;
    }>(URL.AUTH.signup, { pushedOrder, deviceId }, temporaryToken);
    return res;
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
};

const signOut = async (accessToken: string) => {
  try {
    const res = await postWithToken<{
      wasSignedOut: boolean;
    }>(URL.AUTH.signout, {}, accessToken);

    return res;
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const reissueToken = async (refreshToken: string) => {
  try {
    const res = await fetch(URL.AUTH.reissue, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    });

    return res.json();
  } catch (error) {
    throw new Error("토큰 재발급에 실패했습니다.");
  }
};

const logout = async (accessToken: string) => {
  try {
    const res = await fetch(URL.AUTH.logout, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const checkLoginAvailable = async (data: CheckInfo) => {
  try {
    const res = await postWithoutToken<{
      isAvailable: boolean;
      temporaryToken: string;
    }>(URL.AUTH.checkLoginAvailable, {
      data,
    });

    return res;
  } catch (error) {
    throw new Error("로그인 가능여부 확인에 실패했습니다.");
  }
};

// 보안 키패드 관련 API
const getKeypad = async (temporaryToken: string) => {
  try {
    const res = await getWithToken<{
      keypad: string[];
    }>(URL.KEYPAD.getKeypad, temporaryToken);

    return res;
  } catch (error) {
    throw new Error("키패드를 가져오는데 실패했습니다.");
  }
};

const api = {
  sendSMSCode,
  checkSMSCode,
  checkPassword,
  changePassword,
  getUser,
  updateUser,
  signwithForm,
  signOut,
  reissueToken,
  logout,
  checkLoginAvailable,
  getKeypad,
};

export default api;
