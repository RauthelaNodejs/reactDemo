import "./App.css";
import { Routing } from "./router/Routing";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/Store";
import { ToastContainer, toast } from "react-toast";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
        <ToastContainer position="top-center" />
      </PersistGate>
    </Provider>
  );
};

export default App;
