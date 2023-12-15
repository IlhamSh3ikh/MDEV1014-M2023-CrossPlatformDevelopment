import React, { createContext, useContext, useState, ReactNode } from 'react';


interface User {
    email: string;
    // name: string;
    fullName: string;
  }

interface AuthContextType {
    user: User | null;
  isLoggedIn: boolean;
  login: (email: string, fullName: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProps {
    children: ReactNode;
  }
export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string): Promise<void> => {
        try {
          const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            setUser(data.user);
          } else {
            console.log(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
    
      const logout = (): void => {
        setUser(null);
      };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout}}>
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