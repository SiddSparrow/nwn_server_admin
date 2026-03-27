import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthContextValue {
  token: string | null;
  username: string | null;
  login: (token: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('admin_token'));
  const [username, setUsername] = useState<string | null>(() => localStorage.getItem('admin_username'));

  const login = useCallback((t: string, u: string) => {
    localStorage.setItem('admin_token', t);
    localStorage.setItem('admin_username', u);
    setToken(t);
    setUsername(u);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_username');
    setToken(null);
    setUsername(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
