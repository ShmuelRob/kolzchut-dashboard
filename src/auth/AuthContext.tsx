import { createContext, useState, useEffect } from 'react';
import {redirect} from "react-router-dom";

interface AuthContextType<T> {
  user: T | null;
  login: (userData: T) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType<unknown> | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<unknown | null>(null);

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: unknown) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    redirect('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
