import { clearToken, setToken } from "@src/features/slices/auth";
import { api } from ".";

api.enhanceEndpoints({
  endpoints: {
    postAuthPassword: {
      async onQueryStarted(props, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
        } catch {
          dispatch(clearToken());
        }
      },
    },
    postAuthGoogle: {
      async onQueryStarted(props, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
        } catch {
          dispatch(clearToken());
        }
      },
    },

    postRegister: {
      async onQueryStarted(props, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
        } catch {
          dispatch(clearToken());
        }
      },
    },
  },
});

export { api as apiSlice };
