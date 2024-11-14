import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stringify } from "qs";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://grimoar-api.vercel.app",
    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
        headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      } else {
        headers.set("Authorization", "Bearer invalid");
      }
      return headers;
    },
    paramsSerializer: (params) => stringify(params, { encodeValuesOnly: true }),
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
