const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const SMS = {
  stealCode: `${baseURL}/sms/steal-verification-code`,
  sendCode: `${baseURL}/sms/send-verification-code`,
  checkCode: `${baseURL}/sms/check-verification-code`,
};

const USER = {
  password: `${baseURL}/customer/password`,
  info: `${baseURL}/customer`,
};

const AUTH = {
  signup: `${baseURL}/auth/sign-with-form`,
  signout: `${baseURL}/auth/sign-out`,
  reissue: `${baseURL}/auth/reissue`,
  logout: `${baseURL}/auth/log-out`,
  checkLoginAvailable: `${baseURL}/auth/check-login-availability`,
};

const KEYPAD = {
  getKeypad: `${baseURL}/secure-keypad/create-keypad`,
};

const URL = {
  SMS,
  USER,
  AUTH,
  KEYPAD,
} as const;

export default URL;
