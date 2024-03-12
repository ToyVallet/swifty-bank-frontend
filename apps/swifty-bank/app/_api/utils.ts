const commonHeaders = {
  "Content-Type": "application/json",
};

async function get<R>(
  url: string,
  withCredentials: boolean = true,
  headerOptions: Record<string, unknown> = {},
  cache: RequestCache = "force-cache",
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "GET",
      ...(withCredentials && { credentials: "include" }),
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
  } catch (error) {
    throw new Error(errorMessage);
  }
}

async function post<R>(
  url: string,
  data: Record<string, unknown>,
  withCredentials: boolean = true,
  headerOptions: Record<string, unknown> = {},
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "POST",
      ...(withCredentials && { credentials: "include" }),
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

async function patch<R>(
  url: string,
  data: Record<string, unknown>,
  withCredentials: boolean = true,
  headerOptions: Record<string, unknown> = {},
  errorMessage: string = "",
): Promise<R> {
  try {
    const res = await fetch(url, {
      method: "PATCH",
      ...(withCredentials && { credentials: "include" }),
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

export { get, post, patch };
