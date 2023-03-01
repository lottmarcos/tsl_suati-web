import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import React, { FC } from "react";

import { RegisterFormValues } from "../types";

export const Register: FC = () => {
  const initialValues: RegisterFormValues = {
    name: "",
    username: "",
    email: "",
    system: 1,
    subsystem: 1,
    role: 1,
    admission: "",
    password: "",
    confirmPassword: "",
  };

  const validationRegister = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório"),
    username: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Este não é um e-mail váilido"),
  });

  const handleRegister = (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationRegister}
      >
        <Form>
          <div>
            <Field name="name" placeholder="Nome e sobrenome" />
            <ErrorMessage component="span" name="name" />
          </div>
          <div>
            <Field name="username" placeholder="Nome de usuário" />
            <ErrorMessage component="span" name="username" />
          </div>
          <div>
            <Field type="email" name="email" placeholder="E-mail" />
            <ErrorMessage component="span" name="email" />
          </div>
          <div>
            <Field as="select" name="system" />
          </div>
          <div>
            <Field as="select" name="subsystem" />
          </div>
          <div>
            <Field as="select" name="role" />
          </div>
          <div>
            <Field name="admission" placeholder="Mês e ano de admissão" />
            <ErrorMessage component="span" name="admission" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Senha" />
            <ErrorMessage component="span" name="password" />
          </div>
          <div>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirmar senha"
            />
            <ErrorMessage component="span" name="email" />
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
  );
};
