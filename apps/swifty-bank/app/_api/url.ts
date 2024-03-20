const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const USER = {
  updatePassword: `${baseURL}/customer/update-password`,
  validatePassword: `${baseURL}/customer/validate-password`,
  info: `${baseURL}/customer`,
  keypad: `${baseURL}/customer/create-keypad`,
};

const AUTH = {
  stealCode: `${baseURL}/auth/steal-verification-code`,
  sendCode: `${baseURL}/auth/send-verification-code`,
  checkCode: `${baseURL}/auth/check-verification-code`,
  signup: `${baseURL}/auth/sign-with-form`,
  signout: `${baseURL}/auth/sign-out`,
  reissue: `${baseURL}/auth/reissue`,
  logout: `${baseURL}/auth/log-out`,
  checkLoginAvailable: `${baseURL}/auth/check-login-availability`,
  keypad: `${baseURL}/auth/create-keypad`,
};

const ACCOUNT = {
  withdraw: `${baseURL}/account/withdraw`,
  updateStatus: `${baseURL}/account/update-status`,
  updateDefaultCurrency: `${baseURL}/account/update-default-currency`,
  updateCurrencyStatus: `${baseURL}/account/update-currency-status`,
  register: `${baseURL}/account/register`,
  updatePassword: `${baseURL}/account/update-password`,
  updateNickname: `${baseURL}/account/update-nickname`,
  retrieveBalance: `${baseURL}/account/retrieve-balance`,
  list: `${baseURL}/account/list`,
  keypad: `${baseURL}/account/create-keypad`,
};

const URL = {
  USER,
  AUTH,
  ACCOUNT,
} as const;

export default URL;
