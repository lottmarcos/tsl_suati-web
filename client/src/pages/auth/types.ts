export interface LoginFormValues {
  username: string;
  password: string;
}

export type AuthContextType = {
  login: (inputs: LoginFormValues) => void;
};
