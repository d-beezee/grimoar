import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { clearToken, setToken } from "@src/features/slices/auth";
import { stringify } from "qs";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://grimoar.davidebizzi.org",
  credentials: "include", // Per inviare automaticamente i cookie
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  paramsSerializer: (params) => stringify(params, { encodeValuesOnly: true }),
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Token scaduto, prova a fare il refresh
    const refreshResult = await baseQuery(
      { url: "/auth/verify", method: "POST" },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // Aggiorna lo stato con il nuovo token
      api.dispatch(setToken((refreshResult.data as any).token));

      // Ritenta la richiesta originale
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Se il refresh fallisce, gestisci il logout
      api.dispatch(clearToken());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
