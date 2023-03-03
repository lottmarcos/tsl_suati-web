import * as yup from "yup";
import { FC, useContext } from "react";
import { Formik, Form } from "formik";

import "../../../css/styles.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { AuthContextType, LoginFormValues } from "../types";
import { FormikInputField } from "../../../common/FormikInputField/FormikInputField";
import { SubmitButton } from "../../../common/SubmitButton/SubmitButton";
import { AuthPageTitle } from "../components/AuthPageTitle/AuthPageTitle";
import { LoginLinks } from "../components/LoginLinks/LoginLinks";

export const Login: FC = () => {
  const { login } = useContext(AuthContext) as AuthContextType;
  const initialValues: LoginFormValues = { username: "", password: "" };

  const validationLogin = yup.object().shape({
    username: yup.string().required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Este campo é obrigatório"),
  });

  const handleLogin = async (values: LoginFormValues) => {
    try {
      await login(values);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="LoginSection">
      <AuthPageTitle label="Login" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationLogin}
      >
        <Form>
          <FormikInputField
            type="username"
            name="username"
            placeholder="Nome de usuário"
          />
          <FormikInputField
            type="password"
            name="password"
            placeholder="Senha"
          />
          <SubmitButton label="Entrar" type="submit" />
        </Form>
      </Formik>
      <LoginLinks />
    </section>
  );
};
