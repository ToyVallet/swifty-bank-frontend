import { User } from "@/_api/type";
import URL from "@/_api/url";
import { get, patch, post } from "@/_api/utils";

interface Response {
  message: string;
}

// 회원 API
const validatePassword = async (pushedOrder: Number[]) => {
  const res = await post<Response>(URL.USER.validatePassword, { pushedOrder });

  return res;
};

const updatePassword = async (pushedOrder: Number[]) => {
  const res = await patch<Response>(URL.USER.updatePassword, { pushedOrder });

  return res;
};

const getUser = async () => {
  const res = await get<User>(URL.USER.info, {}, "no-store");

  return res;
};

const updateUser = async (data: User) => {
  const res = await patch<Response>(URL.USER.info, { data });

  return res;
};

const getKeypad = async () => {
  const res = await get<{
    keypad: string;
    keypadToken: string;
  }>(URL.USER.keypad, {}, "no-store");

  return res;
};

const user = {
  validatePassword,
  updatePassword,
  getUser,
  updateUser,
  getKeypad,
};

export default user;
