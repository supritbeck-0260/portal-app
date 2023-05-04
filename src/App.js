import { useState } from "react";
import "./App.css";
import PortalContext from "./context/PortalContext";
import RouterHandler from "./RouterHandler";
import originalData from "./data/portalData.json";
function App() {
  const [portalData, setPortalData] = useState({});
  return (
    <>
      <PortalContext.Provider
        value={{ portalData, setPortalData, originalData }}
      >
        <div className="App">
          <h1>Portal App</h1>
          <RouterHandler />
        </div>
      </PortalContext.Provider>
    </>
  );
}

export default App;
export { PortalContext };
