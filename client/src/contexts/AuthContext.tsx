import axios from "axios";
import { createContext, FC, useState } from "react";
import { AuthContextProps, AuthContextType, LoginFormValues } from "./types";
import cookies from "js-cookie";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: FC<AuthContextProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    cookies.get("accessToken") || ""
  );

  const login = async (inputs: LoginFormValues) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      { withCredentials: true }
    );
    setAccessToken(res.data);
  };

  const logout = () => {
    cookies.remove("accessToken");
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
