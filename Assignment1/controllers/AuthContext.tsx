import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';


interface User {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
  }

interface AuthContextType {
    user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProps {
    children: ReactNode;
  }
export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            setIsLoggedIn(true);
            setUser(data.user);
          } else {
            alert('Invalid email or password. Please try again.');
            console.log(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
      
      // useEffect(() => {
      //   console.log('is N1', isLoggedIn); // This will log the updated value
      //   console.log('user21', user); // This will log the updated value
      // }, [isLoggedIn, user]);

      const logout = (): void => {
        setIsLoggedIn(false);
        setUser(null);
      };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout}}>
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