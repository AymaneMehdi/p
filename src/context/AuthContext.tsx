import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  userRole: 'OWNER' | 'USER' | 'ADMIN' | null;
  username: string | null;
  login: (userName: string, token: string, role: 'OWNER' | 'USER' | 'ADMIN') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));
  const [userRole, setUserRole] = useState<'OWNER' | 'USER' | 'ADMIN' | null>(localStorage.getItem('role') as 'OWNER' | 'USER' | 'ADMIN' | null);
  const [username, setUsername] = useState<string | null>(localStorage.getItem('username'));

  const login = (userName: string, token: string, role: 'OWNER' | 'USER' | 'ADMIN') => {
    console.log(`Logging in with token: ${token}, role: ${role}`);
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('username', userName);
    setIsLoggedIn(true);
    setUserRole(role);
    setUsername(userName);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
