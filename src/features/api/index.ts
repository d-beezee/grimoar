import { apiSlice as api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    $get: build.query<$getApiResponse, $getApiArg>({
      query: (queryArg) => ({ url: `/`, body: queryArg.body }),
    }),
    getProtected: build.query<GetProtectedApiResponse, GetProtectedApiArg>({
      query: () => ({ url: `/protected` }),
    }),
    postAuthPassword: build.mutation<
      PostAuthPasswordApiResponse,
      PostAuthPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/password`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    postAuthGoogle: build.mutation<
      PostAuthGoogleApiResponse,
      PostAuthGoogleApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/google`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getRefresh: build.query<GetRefreshApiResponse, GetRefreshApiArg>({
      query: () => ({ url: `/refresh` }),
    }),
    postRegister: build.mutation<PostRegisterApiResponse, PostRegisterApiArg>({
      query: (queryArg) => ({
        url: `/register`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type $getApiResponse = /** status 200 OK */ {
  message: string;
};
export type $getApiArg = {
  body: string;
};
export type GetProtectedApiResponse = /** status 200 OK */ {
  message?: string;
};
export type GetProtectedApiArg = void;
export type PostAuthPasswordApiResponse = /** status 200 OK */ {
  token: string;
};
export type PostAuthPasswordApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type PostAuthGoogleApiResponse = /** status 200 OK */ {
  token: string;
};
export type PostAuthGoogleApiArg = {
  body: {
    accessToken: string;
  };
};
export type GetRefreshApiResponse = /** status 200 OK */ {
  token?: string;
};
export type GetRefreshApiArg = void;
export type PostRegisterApiResponse = /** status 200 OK */ {
  token: string;
  message: string;
};
export type PostRegisterApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export const {
  use$getQuery,
  useGetProtectedQuery,
  usePostAuthPasswordMutation,
  usePostAuthGoogleMutation,
  useGetRefreshQuery,
  usePostRegisterMutation,
} = injectedRtkApi;
