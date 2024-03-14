import { CheckInfo } from "@/_api/type";
import URL from "@/_api/url";
import { post } from "@/_api/utils";

// Authentication API
const signwithForm = async (pushedOrder: Number[], deviceId: string) => {
  try {
    const res = await post<{
      tokens: string;
      success: boolean;
      availablePassword: boolean;
    }>(
      URL.AUTH.signup,
      {
        pushedOrder,
        deviceId,
      },
      // true,
    );

    return res;
  } catch (error) {
    throw new Error("로그인에 실패했습니다.");
  }
};

const signOut = async () => {
  try {
    const res = await post<{
      wasSignedOut: boolean;
    }>(
      URL.AUTH.signout,
      {},
      // true
    );

    return res;
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const reissueToken = async () => {
  try {
    const res = await post<{
      isSuccess: boolean;
      tokens: string;
    }>(
      URL.AUTH.reissue,
      {},
      // true
    );

    return res;
  } catch (error) {
    throw new Error("토큰 재발급에 실패했습니다.");
  }
};

const logout = async () => {
  try {
    const res = await post<{
      isSuccessful: boolean;
    }>(
      URL.AUTH.logout,
      {},
      // true
    );
    return res;
  } catch (error) {
    throw new Error("로그아웃에 실패했습니다.");
  }
};

const checkLoginAvailable = async (data: CheckInfo) => {
  try {
    const res = await post<{
      isAvailable: boolean;
      temporaryToken: string;
    }>(
      URL.AUTH.checkLoginAvailable,
      { ...data },
      // false
    );

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
