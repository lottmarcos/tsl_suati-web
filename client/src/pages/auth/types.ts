export interface LoginFormValues {
  username: string;
  password: string;
}

export interface RegisterFormValues {
  name: string;
  username: string;
  email: string;
  system: number;
  subsystem: number;
  role: number;
  admission: string;
  password: string;
  confirmPassword: string;
}

export type AuthContextType = {
  login: (inputs: LoginFormValues) => void;
};
