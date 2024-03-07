import URL from "@/_api/url";
import { User } from "./type";

// SMS 인증 API
const sendSMSCode = async (phoneNumber: string) => {
  try {
    const res = await fetch(URL.SMS.sendCode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
      }),
    });

    return res.json();
  } catch (error) {
    throw new Error("인증번호 전송에 실패했습니다.");
  }
};

const checkSMSCode = async (
  temporaryToken: string,
  phoneNumber: string,
  verficationCode: string,
) => {
  try {
    const res = await fetch(URL.SMS.checkCode, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${temporaryToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        verficationCode,
      }),
    });

    return res.json();
  } catch (error) {
    throw new Error("인증번호 확인에 실패했습니다.");
  }
};

// 회원 API
const checkPassword = async (accessToken: string, password: string) => {
  try {
    const res = await fetch(URL.USER.password, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    return res.json();
  } catch (error) {
    throw new Error("비밀번호 일치여부 확인에 실패했습니다.");
  }
};

const changePassword = async (accessToken: string, password: string) => {
  try {
    const res = await fetch(URL.USER.password, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    });

    return res.json();
  } catch (error) {
    throw new Error("비밀번호 변경에 실패했습니다.");
  }
};

const getUser = async (accessToken: string) => {
  try {
    const res = await fetch(URL.USER.info, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return res.json();
  } catch (error) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }
};

const updateUser = async (accessToken: string, data: User) => {
  try {
    const res = await fetch(URL.USER.info, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (error) {
    throw new Error("유저 정보를 업데이트하는데 실패했습니다.");
  }
};

// Authentication API
const signwithForm = async (
  temporaryToken: string,
  pushOrder: Number[],
  deviceId: string,
) => {
  try {
    const res = await fetch(URL.AUTH.signup, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${temporaryToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pushOrder,
        deviceId,
      }),
    });
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
};

const signOut = async (accessToken: string) => {
  try {
    const res = await fetch(URL.AUTH.signout, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return res.json();
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

// 보안 키패드 관련 API
const getKeypad = async (temporaryToken: string) => {
  try {
    const res = await fetch(URL.KEYPAD.getKeypad, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${temporaryToken}`,
        "Content-Type": "application/json",
      },
    });

    return res.json();
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
  getKeypad,
};

export default api;
