import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../style.css";
import { useDispatch } from "react-redux";
import { EMAILREGEX, PASSWORDREGEX } from "../helpers/helpers";
import { Login_action } from "../../redux/action/Useraction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [data1, setData1] = useState([]);
  // states for input fileds email and password

  let userdata = useSelector((state) => state?.loginreducers?.userData); //retrieve data from store of redux using useselector
 
 
  // useEffect(() => {
  //   setData1(userdata)

  //   },[userdata]);
const data=localStorage.getItem('logindata')
let logindata=JSON.parse(data)
console.log(logindata);
  const validate = () => {
    let error = 0;
    if (email === "") {
      setEmailerror("This field is required");
      error++;
    } else {
      setEmailerror("");
    }
    if (email) {
      if (!email.match(EMAILREGEX)) {
        setEmailerror("Invalid email");
        error++;
      } else {
        setEmailerror("");
      }
    }

    if (password === "") {
      setPassworderror("This field is required");
      error++;
    } else {
      setPassworderror("");
    }
    if (password) {
      if (!password.match(PASSWORDREGEX)) {
        setPassworderror("Invalid password");
        error++;
      } else {
        setPassworderror("");
      }
    }
    return error;
  };

  const handlelogin = () => {
    if (validate() == 0) {
      if (email == logindata.email && password == logindata.password) {
        const data={
          name:logindata.name,email:email,password:password
      }
        let res = {
          status: 1,
           access_token: "gdgjhk_tyfhgjf..U&uytgHhfdhgnm...HGhjutfyGHgjuJGHVC"
         
        };

        dispatch(Login_action(res));
        navigate("/list");
      } else {
        toast.error("wrong credentials");
      }
    }
  };
  return (
    <div>
        <div className="input-container">
          <label>Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="error-css">{emailerror}</span>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input  value={password} onChange={(e) => setPassword(e.target.value)} />
        <span className="error-css">{passworderror}</span>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="button-container">
          <button className="button-css" onClick={handlelogin}>Login</button>
        </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
          <div  className="button-container">
            <span>not registered Yet </span>
            <button className="button-css" onClick={()=>navigate('/signup')}>Signup</button>
        </div>
        </div>
        </div>
  );
};

export { Login };
