const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const SMS = {
  sendCode: `${baseURL}/sms/send-verification-code`,
  getCode: `${baseURL}/sms/get-verification-code`,
  checkCode: `${baseURL}/sms/check-verification-code`,
};

const USER = {
  password: `${baseURL}/customer/password`,
  info: `${baseURL}/customer`,
};

const AUTH = {
  signup: `${baseURL}/auth/sign-up-with-form`,
  signout: `${baseURL}/auth/sign-out`,
  reissue: `${baseURL}/auth/reissue`,
  logout: `${baseURL}/auth/log-out`,
  signinWithJWT: `${baseURL}/auth/sign-in-with-jwt`,
  signinWithForm: `${baseURL}/auth/sign-in-with-form`,
};

const URL = {
  SMS,
  USER,
  AUTH,
} as const;

export default URL;
