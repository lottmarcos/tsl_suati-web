import { Formik, Form } from "formik";
import * as yup from "yup";
import { FC } from "react";

import { RegisterFormValues } from "../types";
import { AuthPageTitle } from "../components/AuthPageTitle/AuthPageTitle";
import { FormikInputField } from "../../../common/FormikInputField/FormikInputField";
import { SubmitButton } from "../../../common/SubmitButton/SubmitButton";
import { FormikSelectField } from "../../../common/FormikSelectField/FormikSelectField";
import { AuthPageLinks } from "../components/AuthPageLinks/AuthPageLinks";

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
    <section className="AuthPageBox" id="BigAuthBox">
      <AuthPageTitle label="Cadastro" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationRegister}
      >
        <Form>
          <FormikInputField
            type="name"
            name="name"
            placeholder="Nome e sobrenome"
          />
          <FormikInputField
            type="username"
            name="username"
            placeholder="Nome de usuário"
          />
          <FormikInputField type="email" name="email" placeholder="E-mail" />
          <FormikSelectField name="system" placeholder="Sistema" />
          <FormikSelectField name="subsystem" placeholder="Subsistema" />
          <FormikSelectField name="role" placeholder="Cargo" />
          <FormikInputField
            name="admission"
            placeholder="Mês e ano de admissão"
          />
          <FormikInputField
            type="password"
            name="password"
            placeholder="Senha"
          />

          <FormikInputField
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
          />
          <SubmitButton label="Cadastrar" type="submit" />
        </Form>
      </Formik>
      <AuthPageLinks href="/login" text="Já possui conta?" link="Entre." />
    </section>
  );
};
