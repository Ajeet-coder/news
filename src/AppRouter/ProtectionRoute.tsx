import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Home from "../components/Home/Home";
import NewsSearch from "../components/NewsSearch/NewsSearch";

interface IprotectedRouteProps {
  children: React.ReactNode;
}

const ProtectionRoute = ({ children }: IprotectedRouteProps) => {
  console.log("Auth  ", sessionStorage.getItem("access_token"));
  return (
    <>
      {" "}
      {sessionStorage.getItem("access_token") ? (
        children
      ) : (
        <Navigate replace to={"/"} />
      )}
    </>
  );
};

export default ProtectionRoute;
