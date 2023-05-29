import { FAIL, LOGIN_FAIL, LOG_OUT, SUCCESS } from "../Types";

export const Login_action=(res)=>{
  return (dispatch)=>{
    let statusCode=1;
    if(res.status===statusCode)
      {
        dispatch({type:SUCCESS,payload:res.access_token})
      }
      else{
        dispatch({type:FAIL,payload:"error"})
      }
  }
}
export const Signup_action=(res,props)=>{
  return (dispatch)=>{
    let statusCode=1;
    if(res.status===statusCode)
      {
        dispatch({type:SUCCESS,payload:res.access_token})
      }
      else{
        dispatch({type:FAIL,payload:"error"})
      }
  }
}
export const Logout_action=(res,props)=>{
  return (dispatch)=>{
    let statusCode=1;
    if(res.status===statusCode)
      {
        dispatch({type:LOG_OUT,payload:props})
      }
      else{
        dispatch({type:LOGIN_FAIL,payload:"error"})
      }
  }
}