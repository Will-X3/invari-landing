import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Landing page does not use authentication
  const value = {
    user: null,
    isAuthenticated: false,
    isLoadingAuth: false,
    logout: () => {},
    navigateToLogin: () => {
      window.location.href = "/login";
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
