import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { FC } from "react";

interface FormValues {
  username: string;
  password: string;
}

export const Login: FC = () => {
  const initialValues: FormValues = { username: "", password: "" };

  const validationLogin = yup.object().shape({
    username: yup.string().required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Este campo é obrigatório"),
  });

  const handleLogin = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleLogin(values)}
        validationSchema={validationLogin}
      >
        <Form>
          <div>
            <Field name="username" placeholder="Nome de usuário" />
            <ErrorMessage component="span" name="username" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />
          </div>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>
  );
};
