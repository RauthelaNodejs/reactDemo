import React, { useState } from "react";
import PropTypes from "prop-types";
import movies from "./movies.json";
import { useDispatch, useSelector } from "react-redux";
import { Logout_action } from "../../redux/action/Useraction";
import { useNavigate } from "react-router-dom";
const List = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = localStorage.getItem("logindata");
  let logindata = JSON.parse(data);
  console.log(logindata);
  let access = useSelector((state) => state?.loginreducers?.access_token); //retrieve data from store of redux using useselector
  console.log(access);
  const logout = () => {
    const res = {
      status: 1,
    };
    dispatch(Logout_action(res, null));
    navigate("/");
  };
  return (
    <div className="list-css">
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <button onClick={logout} className="button-css">
          {" "}
          logout
        </button>
      </div>

      <div
        style={{
          width: "100%",
          justifyContent: "flex-end",
          display: "flex",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Hello {logindata.name}
      </div>
      <div
        style={{
          width: 400,
          height: 100,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: 400,
            height: 50,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            border: "1px solid",
          }}
        >
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Name
          </div>
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Email
          </div>
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Phoneno
          </div>
        </div>
        <div
          style={{
            width: 400,
            height: 50,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            border: "1px solid",
          }}
        >
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logindata.name}
          </div>
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logindata.email}
          </div>
          <div
            style={{
              width: 200,
              height: 50,
              display: "flex",
              backgroundColor: "white",
              border: "1px solid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {logindata.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export { List };
