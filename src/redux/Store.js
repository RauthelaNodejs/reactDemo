
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import { rootreducers } from "../redux/reducers/index";
const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persisedReducer = persistReducer(persistConfig, rootreducers);
export let store = legacy_createStore(persisedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
export default store;
