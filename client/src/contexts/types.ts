import { ReactNode } from "react";

export interface AuthContextProps {
  children: ReactNode;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export type AuthContextType = {
  accessToken: string;
  login: (inputs: LoginFormValues) => void;
  logout: () => void;
};
