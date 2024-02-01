// AuthContainer.jsx
// import React, { useState } from "react";
// import Login from "./Login";
// import Register from "./Register";

// const AuthContainer = () => {
//   const [showLogin, setShowLogin] = useState(true);
//   const [showRegister, setShowRegister] = useState(true);

//   return (
//     <div className="flex justify-center items-center w-full h-[50dvh] bg-white-bg dark:bg-black-bg">
//       <div className="bg-black-fg border-2 p-8 rounded-lg shadow-md">
//         {showLogin ? (
//           <Login switchToRegister={() => setShowLogin(false)} />
//         ) : (
//           <Register switchToLogin={() => setShowLogin(true)} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthContainer;

import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import GlobalPagesLayouts from "../pages/GlobalPagesLayouts";

function AuthContainer() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="">
      <GlobalPagesLayouts title="User Authentication">
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
