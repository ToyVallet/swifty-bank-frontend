import Error from "next/error";

const commonHeaders = {
  "Content-Type": "application/json",
};

async function get<R>(
  url: string,
  headerOptions: Record<string, unknown> = {},
  cache: RequestCache = "force-cache",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        ...commonHeaders,
        ...headerOptions,
      },
      cache,
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

async function post<R>(
  url: string,
  data: Record<string, unknown>,
  headerOptions: Record<string, unknown> = {},
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        ...commonHeaders,
        ...headerOptions,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

async function patch<R>(
  url: string,
  data: Record<string, unknown>,
  headerOptions: Record<string, unknown> = {},
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "PATCH",
      credentials: "same-origin",
      headers: {
        ...commonHeaders,
        ...headerOptions,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export { get, post, patch };
