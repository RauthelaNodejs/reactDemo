import React, { useState } from "react";
import PropTypes from "prop-types";
import "../style.css";
import { useDispatch } from "react-redux";
import { Signup_action } from "../../redux/action/Useraction";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const handleSignIn = () => {
    const data={
        name:name,email:email,password:password, phone:phone
    }
  
    // const Userdata = [...data]; 
    // data.push(data)
    const res = {
      status: 1,
      access_token:"gdgjhk_tyfhgjf..U&uytgHhfdhgnm...HGhjutfyGHgjuJGHVC"
    };
    dispatch(Signup_action(res));
    localStorage.setItem('logindata',JSON.stringify(data))
    navigate("/");
  };
  return (

    <div>
      <div className="input-container">
          <label>Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Phone </label>
          <input  value={phone}  onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="button-container">
          <button className="button-css" onClick={handleSignIn}>Sign Up</button>
        </div>
        </div>
        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
          <div  className="button-container">
            <span>already registered </span>
            <button className="button-css" onClick={()=>navigate('/')}>Log In</button>
        </div>
        </div>
        </div>

  );
};

export { Signup };
