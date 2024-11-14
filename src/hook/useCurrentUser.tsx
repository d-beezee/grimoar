import { useGetProtectedQuery } from "../features/api";

const useCurrentUser = () => {
  const { data } = useGetProtectedQuery();
  if (!localStorage.getItem("token")) return false;
  if (!data) return false;

  return data;
};

export default useCurrentUser;
