import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext<{ user: any, setUser: (user: any) => void }>({ user: null, setUser: () => { } });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Update localStorage whenever user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};