import { FAIL, SUCCESS } from "../Types";

const initialstate = {
  userdata: null,
  issignup: false,
};
export const Signupreducer = (state = initialstate, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        userData: action.payload,
        message: "SUCCESSFULL",
        issignup: true,
      };
    case FAIL:
      return {
        ...state,
        userdata: action.payload,
        message: "FAIL",
      };
    
    default:
      return state;
  }
};
