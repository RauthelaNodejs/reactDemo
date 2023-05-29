import {
  FAIL,
  LOG_OUT,
  LOG_OUT_FAIL,
  SUCCESS,
} from "../Types";

const initialstate = {
  userData: null,
  islogin: false,
  access_token: null,
};
export const loginreducers = (state = initialstate, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        userData: action.payload,
        islogin: true,
        access_token: action.payload,
      };
    case FAIL:
      return {
        ...state,
        userdata: action.payload,
        message: "Otp send fail",
        islogin: false,
        access_token: null,
      };
    case LOG_OUT:
      return {
        ...state,
        userData: null,
        message: "Log out Successfully",
        islogin: false,
        access_token: null,
      };
    case LOG_OUT_FAIL:
      return {
        message: "Log out fAil",
        islogin: true,
      };
    default:
      return state;
  }
};
