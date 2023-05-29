import { combineReducers } from "redux";
import { loginreducers } from "./Loginreducers";
import { Signupreducer } from "./Signupreducers";

export const rootreducers = combineReducers({
  loginreducers: loginreducers,
  Signupreducers: Signupreducer,
});
