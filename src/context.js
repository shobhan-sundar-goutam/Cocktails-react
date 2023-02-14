import { createContext, useContext } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export default Context;
