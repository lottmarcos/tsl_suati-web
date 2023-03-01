import * as yup from "yup";
import React, { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AuthContext } from "../../../contexts/AuthContext";
import { AuthContextType, LoginFormValues } from "../types";
import "../../../css/styles.css";

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
    <div className="loginPageDiv">
      <h1 className="loginTitle">Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationLogin}
      >
        <Form className="loginForm">
          <div>
            <Field
              name="username"
              placeholder="Nome de usuário"
              className="loginField"
            />
            <ErrorMessage component="span" name="username" />
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Senha"
              className="loginField"
            />
            <ErrorMessage component="span" name="password" />
          </div>
          <button className="loginButton" type="submit">
            Entrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};
