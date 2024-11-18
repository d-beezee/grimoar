import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@src/storeTypes";
import { stringify } from "qs";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://grimoar-api.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    paramsSerializer: (params) => stringify(params, { encodeValuesOnly: true }),
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
