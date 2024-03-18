import URL from "@/_api/url";
import { get } from "@/_api/utils";

// 보안 키패드 관련 API
const getKeypad = async () => {
  try {
    const res = await get<{
      keypad: string;
    }>(URL.KEYPAD.getKeypad, {}, "no-cache");

    return res;
  } catch (error) {
    throw new Error("키패드를 가져오는데 실패했습니다.");
  }
};

const Keypad = {
  getKeypad,
};

export default Keypad;
