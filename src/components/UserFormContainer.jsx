import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import GlobalPagesLayouts from "../pages/GlobalPagesLayouts";

function AuthContainer() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="">
      <GlobalPagesLayouts>
        {showLogin ? (
          <Login switchToRegister={() => setShowLogin(false)} />
        ) : (
          <Register switchToLogin={() => setShowLogin(true)} />
        )}
      </GlobalPagesLayouts>
    </div>
  );
}

export default AuthContainer;
