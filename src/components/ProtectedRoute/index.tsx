import React, { FC } from "react";
import {Navigate } from "react-router-dom";

interface Props {
    children: any;
}

const ProtectedRoute: FC<Props> = ({ children}) => {
    const token = localStorage.getItem('mydiary-token');

  const isAuthenticated = token ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>;
  }

  return children;
};

export default ProtectedRoute;
