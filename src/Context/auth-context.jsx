import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loginStatus: localStorage.getItem("TOKEN") ? true : false,
    token: localStorage.getItem("TOKEN"),
    user: JSON.parse(localStorage.getItem("USER_INFO")),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };