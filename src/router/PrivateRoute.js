import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login } from "../components/auth/Login";

const PrivateRoute = ({ children }) => {
  let access_token = useSelector(
    (state) => state?.loginreducers?.access_token
  );
  console.log(access_token);
  if (access_token) 
  return children;
  {
    return <Navigate to='/' />;
  }
};

export default PrivateRoute
