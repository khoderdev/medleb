import { createContext } from "react";
import App from "../../App";

const Khoder = createContext();

function Supplier() {
  return;

  <div>
    <Khoder.Provider value="Panadol">
      <App />
    </Khoder.Provider>
  </div>;
}

export default Supplier;
