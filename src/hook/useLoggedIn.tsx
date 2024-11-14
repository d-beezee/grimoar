import { useEffect, useState } from "react";
import { useGetProtectedQuery } from "../features/api";

const useLoggedIn = () => {
  const { data, isLoading } = useGetProtectedQuery();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false,
  );

  useEffect(() => {
    if (data) setLoggedIn(true);
    else if (!isLoading) setLoggedIn(false);
  }, [data, isLoading]);

  return loggedIn;
};

export default useLoggedIn;
