import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSessionStorage } from "./UseSessionStorage";

const Index = ({ component: Component, ...rest }) => {
  let isAuthorized = false;
  const { getSessionStorage } = useSessionStorage("__appUser");
  const token = getSessionStorage;
  console.log(token);
  if (token !== null) {
    isAuthorized = true;
  }
  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default Index;
