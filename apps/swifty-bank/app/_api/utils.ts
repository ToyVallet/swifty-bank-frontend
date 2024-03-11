const commonHeaders = {
  "Content-Type": "application/json",
};

async function getWithToken<R>(
  url: string,
  token: string,
  headerOptions: Record<string, unknown> = {},
  cache: RequestCache = "no-store",
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        credentials: "include",
        ...commonHeaders,
        ...headerOptions,
      },
      cache,
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error) {
    throw new Error(errorMessage);
  }
}

async function postWithToken<R>(
  url: string,
  data: Record<string, unknown>,
  token: string,
  headerOptions: Record<string, unknown> = {},
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        credentials: "include",
        ...commonHeaders,
        ...headerOptions,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error) {
    throw new Error(errorMessage);
  }
}

async function postWithoutToken<R>(
  url: string,
  data: Record<string, unknown>,
  headerOptions: Record<string, unknown> = {},
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "POST",
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
  } catch (error) {
    throw new Error(errorMessage);
  }
}

async function patchWithToken<R>(
  url: string,
  data: Record<string, unknown>,
  token: string,
  headerOptions: Record<string, unknown> = {},
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        credentials: "include",
        ...commonHeaders,
        ...headerOptions,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error((await res.json()).message);
    }

    return res.json();
  } catch (error) {
    throw new Error(errorMessage);
  }
}

export { getWithToken, postWithToken, postWithoutToken, patchWithToken };
