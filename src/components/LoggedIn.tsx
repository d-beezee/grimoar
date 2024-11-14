import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useLoggedIn from "../hook/useLoggedIn";

const LoggedIn = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useLoggedIn();
  const history = useHistory();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/login");
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default LoggedIn;
