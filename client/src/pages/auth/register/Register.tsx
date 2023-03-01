import { Formik, Form } from "formik";
import React, { FC } from "react";

export const Register: FC = () => {
  const handleRegister = (values) => {};

  return (
    <div>
      <h1>Cadastro</h1>
      <Formik initialValues={{}} onSubmit={(values) => handleRegister(values)}>
        <Form></Form>
      </Formik>
    </div>
  );
};
