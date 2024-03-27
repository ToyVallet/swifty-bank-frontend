import { cookies } from "next/headers";

async function getServer<T>(url: string): Promise<T | string | undefined> {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("access-token")?.value;
  const refreshToken = cookieStore.get("refresh-token")?.value;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `access-token=${accessToken}; refresh-token=${refreshToken}`,
      },
    });
    if (res.status !== 200) {
      const message: { message: string } = await res.json();
      return message.message;
    }
    const data: T = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

const util = {
  getServer,
};

export default util;
