import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Signup } from "../components/auth/Signup";
import { List } from "../components/dash/List";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Login />} />
        <Route
            path="/list"
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />
           <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup/>
              </PublicRoute>
            }
          />
        {/* <PrivateRoute path="list" element={<List />} /> */}
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
