import { RootState } from "@src/storeTypes";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoggedIn = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  return isAuthenticated ? <>{children}</> : <Redirect to="/home" />;
};

export default LoggedIn;
