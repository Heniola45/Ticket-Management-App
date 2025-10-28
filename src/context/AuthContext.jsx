import React, { createContext, useState, useEffect } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(authService.getSession());

  useEffect(() => {
    const onStorage = () => setSession(authService.getSession());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function login(creds) {
    return authService.login(creds).then((s) => {
      setSession(s);
      return s;
    });
  }
  function signup(creds) {
    return authService.signup(creds).then((s) => {
      setSession(s);
      return s;
    });
  }
  function logout() {
    authService.logout();
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        signup,
        logout,
        isAuthenticated: authService.isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
