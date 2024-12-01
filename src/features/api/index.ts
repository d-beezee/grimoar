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
    getGamesById: build.query<GetGamesByIdApiResponse, GetGamesByIdApiArg>({
      query: (queryArg) => ({ url: `/games/${queryArg.id}` }),
    }),
    deleteUsersMe: build.mutation<
      DeleteUsersMeApiResponse,
      DeleteUsersMeApiArg
    >({
      query: () => ({ url: `/users/me`, method: "DELETE" }),
    }),
    postGamesByIdVotes: build.mutation<
      PostGamesByIdVotesApiResponse,
      PostGamesByIdVotesApiArg
    >({
      query: (queryArg) => ({
        url: `/games/${queryArg.id}/votes`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getGamesByIdVotes: build.query<
      GetGamesByIdVotesApiResponse,
      GetGamesByIdVotesApiArg
    >({
      query: (queryArg) => ({ url: `/games/${queryArg.id}/votes` }),
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
export type GetGamesApiResponse = /** status 200 OK */ GameBase[];
export type GetGamesApiArg = void;
export type GetGamesByIdApiResponse = /** status 200 OK */ GameBase & {
  fullImage: string;
  longDescription?: string;
  tags?: string[];
  publisher: string;
};
export type GetGamesByIdApiArg = {
  id: string;
};
export type DeleteUsersMeApiResponse = /** status 200 OK */ {
  message?: string;
};
export type DeleteUsersMeApiArg = void;
export type PostGamesByIdVotesApiResponse = /** status 201 Created */ {
  vote: Vote;
};
export type PostGamesByIdVotesApiArg = {
  id: string;
  body: {
    vote: Vote;
  };
};
export type GetGamesByIdVotesApiResponse = /** status 200 OK */ {
  vote?: Vote;
};
export type GetGamesByIdVotesApiArg = {
  id: string;
};
export type Vote = number;
export type GameBase = {
  id: string;
  name: string;
  description: string;
  year: number;
  image: string;
  vote?: Vote;
};
export const {
  use$getQuery,
  useGetProtectedQuery,
  usePostAuthPasswordMutation,
  usePostAuthVerifyMutation,
  usePostAuthGoogleMutation,
  useGetRefreshQuery,
  usePostRegisterMutation,
  useGetGamesQuery,
  useGetGamesByIdQuery,
  useDeleteUsersMeMutation,
  usePostGamesByIdVotesMutation,
  useGetGamesByIdVotesQuery,
} = injectedRtkApi;
