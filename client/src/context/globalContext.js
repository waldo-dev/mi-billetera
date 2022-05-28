import { createContext, useContext, useEffect, useState } from "react";

const rawDefaultUser = window.localStorage.getItem("user");
const defaultUser = JSON.parse(rawDefaultUser);
const globalContext = createContext(defaultUser);

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(true);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <globalContext.Provider
      value={{
        user,
        setUser,
        showLogin,
        setShowLogin,
        showRegister,
        setShowRegister,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);
