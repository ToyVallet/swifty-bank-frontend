import { User } from "./type";
import URL from "./url";
import { getWithToken, patchWithToken, postWithToken } from "./utils";

interface Response {
  message: string;
}

// 회원 API
const checkPassword = async (accessToken: string, password: string) => {
  try {
    const res = await postWithToken<Response>(
      URL.USER.password,
      { password },
      accessToken,
    );

    return res;
  } catch (error) {
    throw new Error("비밀번호 일치여부 확인에 실패했습니다.");
  }
};

const changePassword = async (accessToken: string, password: string) => {
  try {
    const res = await patchWithToken<Response>(
      URL.USER.password,
      { password },
      accessToken,
    );

    return res;
  } catch (error) {
    throw new Error("비밀번호 변경에 실패했습니다.");
  }
};

const getUser = async (accessToken: string) => {
  try {
    const res = await getWithToken<User>(URL.USER.info, accessToken);

    return res;
  } catch (error) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }
};

const updateUser = async (accessToken: string, data: User) => {
  try {
    const res = await patchWithToken<Response>(
      URL.USER.info,
      { data },
      accessToken,
    );

    return res;
  } catch (error) {
    throw new Error("유저 정보를 업데이트하는데 실패했습니다.");
  }
};

const user = {
  checkPassword,
  changePassword,
  getUser,
  updateUser,
};

export default user;
