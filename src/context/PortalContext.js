import { createContext } from "react";

const PortalContext = createContext({
  portalData: {},
  setPortalData: () => {},
  originalData: [],
});

export default PortalContext;
