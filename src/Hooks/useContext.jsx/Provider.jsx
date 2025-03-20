// authContext.jsx
import { createContext, useState } from "react";

// 1. Creating AuthContext using createContext
export const AuthContext = createContext(null);

// 2. Provider Component to manage authentication state
const Provider = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [data, setData] = useState({ name: "Pranjal" });

  const logIn = () => {
    setData({ name: "Pranjal" });
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setData({ name: "Please log in" });
    setIsLoggedIn(false);
  };

  // 3. Providing state and functions using AuthContext
  return (
    <AuthContext.Provider value={{ isLoggedin, logIn, logOut, data }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
