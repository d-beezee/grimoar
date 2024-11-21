import { apiSlice as api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    $get: build.query<$getApiResponse, $getApiArg>({
      query: () => ({ url: `/` }),
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
    postAuthVerify: build.mutation<
      PostAuthVerifyApiResponse,
      PostAuthVerifyApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/verify`,
        method: "POST",
        cookies: {
          auth: queryArg.auth,
        },
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
    getGames: build.query<GetGamesApiResponse, GetGamesApiArg>({
      query: () => ({ url: `/games` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type $getApiResponse = /** status 200 OK */ {
  message: string;
};
export type $getApiArg = void;
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
export type PostAuthVerifyApiResponse = /** status 200 OK */ {
  token: string;
  message?: string;
};
export type PostAuthVerifyApiArg = {
  auth: string;
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
export type PostRegisterApiResponse = /** status 201 Created */ {
  token: string;
  message: string;
};
export type PostRegisterApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type GetGamesApiResponse = /** status 200 OK */ {
  name: string;
  description: string;
  year: number;
  image: string;
  vote?: number;
}[];
export type GetGamesApiArg = void;
export const {
  use$getQuery,
  useGetProtectedQuery,
  usePostAuthPasswordMutation,
  usePostAuthVerifyMutation,
  usePostAuthGoogleMutation,
  useGetRefreshQuery,
  usePostRegisterMutation,
  useGetGamesQuery,
} = injectedRtkApi;
