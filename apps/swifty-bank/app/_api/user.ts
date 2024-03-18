import { User } from "@/_api/type";
import URL from "@/_api/url";
import { get, patch, post } from "@/_api/utils";

interface Response {
  message: string;
}

// 회원 API
const checkPassword = async (password: string) => {
  try {
    const res = await post<Response>(URL.USER.password, { password });

    return res;
  } catch (error) {
    throw new Error("비밀번호 일치여부 확인에 실패했습니다.");
  }
};

const changePassword = async (password: string) => {
  try {
    const res = await patch<Response>(URL.USER.password, { password });

    return res;
  } catch (error) {
    throw new Error("비밀번호 변경에 실패했습니다.");
  }
};

const getUser = async () => {
  try {
    const res = await get<User>(URL.USER.info);

    return res;
  } catch (error) {
    throw new Error("유저 정보를 가져오는데 실패했습니다.");
  }
};

const updateUser = async (data: User) => {
  try {
    const res = await patch<Response>(URL.USER.info, { data });

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
