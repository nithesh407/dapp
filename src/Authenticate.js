import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get('isAuthenticated'));
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedAuthStatus = Cookies.get('isAuthenticated');
    const storedRole = Cookies.get('UserRole');

    if (storedAuthStatus && storedRole) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
      setRole(storedRole);
    }
  }, []);

  const login = (email, role,username) => {
    setIsAuthenticated(true);
    Cookies.set('isAuthenticated', true, { expires: 1 });
    Cookies.set('email', email, { expires: 1 });
    Cookies.set('role', role, { expires: 1 });
    Cookies.set('username', username, { expires: 1 });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole('');
    Cookies.remove('isAuthenticated');
    Cookies.remove('email');
    Cookies.remove('role');
    Cookies.remove('username');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, role }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
