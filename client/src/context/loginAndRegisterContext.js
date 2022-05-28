import { createContext, useState, useContext } from "react";

const loginAndRegisterContext = createContext(null);

export const LoginAndRegisterProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  return (
    <loginAndRegisterContext.Provider
      value={{ showLogin, setShowLogin, showRegister, setShowRegister }}
    >
      {children}
    </loginAndRegisterContext.Provider>
  );
};

export const useLoginAndRegister = () => useContext(loginAndRegisterContext);
