import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not signed in

  const signIn = (userData) => {
    setUser(userData); // Set user data on sign in
  };

  const signOut = () => {
    setUser(null); // Clear user data on sign out
  };

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};
