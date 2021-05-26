import React, { useState, useContext, createContext } from 'react';
import { auth } from '../auth/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function login(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
