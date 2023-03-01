import { createContext, FC, useState } from "react";
import { AuthContextProps, AuthContextType, LoginFormValues } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC<AuthContextProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState("aaaaaaaaaaa");

  const login = async (inputs: LoginFormValues) => {
    console.log("Estou no context!");
  };

  const logout = () => {
    console.log("log out");
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
