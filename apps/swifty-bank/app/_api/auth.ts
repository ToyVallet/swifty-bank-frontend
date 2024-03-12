import exp from "constants";
import { CheckInfo } from "./type";
import URL from "./url";
import { postWithToken, postWithoutToken } from "./utils";

// Authentication API
const signwithForm = async (
  temporaryToken: string,
  pushedOrder: Number[],
  deviceId: string,
) => {
  try {
    const res = await postWithToken<{
      tokens: string;
      success: true;
      availablePassword: true;
    }>(
      URL.AUTH.signup,
      {
        pushedOrder,
        deviceId,
      },
      temporaryToken,
    );

    return res;
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
};

const signOut = async (accessToken: string) => {
  try {
    const res = await postWithToken<{
      wasSignedOut: true;
    }>(URL.AUTH.signout, {}, accessToken);

    return res;
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const reissueToken = async (refreshToken: string) => {
  try {
    const res = await postWithToken<{
      isSuccess: true;
      tokens: string;
    }>(URL.AUTH.reissue, {}, refreshToken);

    return res;
  } catch (error) {
    throw new Error("토큰 재발급에 실패했습니다.");
  }
};

const logout = async (accessToken: string) => {
  try {
    const res = await postWithToken<{
      isSuccessful: true;
    }>(URL.AUTH.logout, {}, accessToken);
    return res;
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const checkLoginAvailable = async (data: CheckInfo) => {
  try {
    const res = await postWithoutToken<{
      isAvailable: true;
      temporaryToken: string;
    }>(URL.AUTH.checkLoginAvailable, { ...data });

    return res;
  } catch (error) {
    throw new Error("로그인 가능여부 확인에 실패했습니다.");
  }
};

const auth = {
  signwithForm,
  signOut,
  reissueToken,
  logout,
  checkLoginAvailable,
};

export default auth;
