import React from "react";
import AuthComponent from "./LoginForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

function ECom() {
  return (
    <Provider store={store}>
      <div>
        <LoginForm />
        <RegistrationForm />
        {/* <AuthComponent /> */}
      </div>
    </Provider>
  );
}

export default ECom;
