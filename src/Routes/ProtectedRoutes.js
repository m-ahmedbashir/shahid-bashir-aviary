import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";
const ProtectedRoutes = () => {
  const { user } = useUserAuth();
  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
