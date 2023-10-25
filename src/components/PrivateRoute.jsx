import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const location=useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={location.pathname} replace={true}/>;
  }
  return props.children;
};

export default PrivateRoute;
