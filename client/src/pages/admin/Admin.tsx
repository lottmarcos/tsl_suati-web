import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

import { SprintFormValues } from "./types";

export const Admin = () => {
  const sprintInitialValues: SprintFormValues = {
    task: "",
    deadline: "",
    members: [],
  };

  const validationSprint = yup.object().shape({});

  const handleSprint = (values: SprintFormValues) => {};

  return (
    <div>
      <h1>Admin</h1>
      <Formik
        initialValues={sprintInitialValues}
        onSubmit={(values) => handleSprint(values)}
        validationSchema={validationSprint}
      >
        <Form>
          <div>
            <Field name="task" placeholder="Tarefa" />
          </div>
          <div>
            <Field name="deadline" placeholder="Prazo" />
          </div>
          <div>
            <Field name="members" placeholder="Membro(s)" />
          </div>
          <button>Adicionar</button>
        </Form>
      </Formik>
    </div>
  );
};
