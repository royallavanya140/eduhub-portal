import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  role: "super_admin";
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DUMMY_CREDENTIALS = {
  email: "dev@dev.dev",
  password: "dev123",
  user: {
    email: "dev@dev.dev",
    name: "Dev User",
    role: "super_admin" as const,
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("auth_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email: string, password: string): boolean => {
    if (email === DUMMY_CREDENTIALS.email && password === DUMMY_CREDENTIALS.password) {
      setUser(DUMMY_CREDENTIALS.user);
      localStorage.setItem("auth_user", JSON.stringify(DUMMY_CREDENTIALS.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
