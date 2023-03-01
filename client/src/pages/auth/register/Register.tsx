import { Formik, Form } from "formik";
import React, { FC } from "react";

export const Register: FC = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        <Form></Form>
      </Formik>
    </div>
  );
};
