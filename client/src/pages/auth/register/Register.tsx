import { Formik, Form } from "formik";
import * as yup from "yup";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { RegisterFormValues } from "../types";
import { AuthPageTitle } from "../components/AuthPageTitle/AuthPageTitle";
import { FormikInputField } from "../../../common/FormikInputField/FormikInputField";
import { SubmitButton } from "../../../common/SubmitButton/SubmitButton";
import { FormikSelectField } from "../../../common/FormikSelectField/FormikSelectField";
import { AuthPageLinks } from "../components/AuthPageLinks/AuthPageLinks";
import { getRoles, getSystems } from "../../../services/Register";

export const Register: FC = () => {
  const navigate = useNavigate();

  const [systems, setSystems] = useState([
    {
      id: 1,
      name: "",
    },
  ]);
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "",
    },
  ]);

  const initialValues: RegisterFormValues = {} as RegisterFormValues;

  const validationRegister = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório"),
    username: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Este não é um e-mail váilido"),
    admission: yup.string().required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), ""], "As senhas não conferem")
      .required("Este campo é obrigatório"),
  });

  const handleRegister = async (values: RegisterFormValues) => {
    try {
      await axios.post("http://localhost:8800/api/auth/register", values);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSystems().then((res) => setSystems(res.data));
    getRoles().then((res) => setRoles(res.data));
  }, []);

  return (
    <section className="AuthPageBox">
      <AuthPageTitle label="Cadastro" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleRegister(values)}
        validationSchema={validationRegister}
      >
        <Form>
          <FormikInputField
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
          />
          <FormikInputField
            type="text"
            name="username"
            placeholder="Nome de usuário"
          />
          <FormikInputField type="email" name="email" placeholder="E-mail" />
          <FormikSelectField
            name="system"
            placeholder="Sistema"
            options={systems}
          />
          <FormikSelectField
            name="subsystem"
            placeholder="Subsistema"
            options={[]}
          />
          <FormikSelectField name="role" placeholder="Cargo" options={roles} />
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
