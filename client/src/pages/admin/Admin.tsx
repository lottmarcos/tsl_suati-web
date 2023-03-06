import { Form, Formik } from "formik";
import { useState, useEffect } from "react";
import * as yup from "yup";

import { MacrosFormValues, IMember, SprintFormValues } from "./types";
import { FormikInputField } from "../../common/FormikInputField/FormikInputField";
import {
  getMembers,
  insertComplement,
  insertMacro,
  insertMicro,
  insertSprint,
} from "../../services/Admin";
import { FormikSelectField } from "../../common/FormikSelectField/FormikSelectField";
import { SubmitButton } from "../../common/SubmitButton/SubmitButton";

interface IState {
  members: IMember[];
}

export const Admin = () => {
  const [state, setState] = useState<IState>({
    members: [] as IMember[],
  });

  const sprintInitialValues: SprintFormValues = {} as SprintFormValues;

  const validationSprint = yup.object().shape({});

  const handleSprint = (values: SprintFormValues) => {
    insertSprint(values);
  };

  const macrosInitialValues: MacrosFormValues = {} as MacrosFormValues;

  const validationMacros = yup.object().shape({});

  const handleMacros = (values: MacrosFormValues) => {
    if (values.type == 1) {
      insertMacro(values.name);
    } else if (values.type == 2) {
      insertMicro(values.name);
    } else {
      insertComplement(values.name);
    }
  };

  const membersInitialValues: IMember = {} as IMember;

  const validationMembers = yup.object().shape({});

  const handleMembers = (values: IMember) => {
    console.log("got to handle members, shit! and these are my values: ");
    console.log(values);
  };

  useEffect(() => {
    getMembers().then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <div>
        <h2>Sprints</h2>
        <Formik
          initialValues={sprintInitialValues}
          onSubmit={(values) => handleSprint(values)}
          validationSchema={validationSprint}
        >
          <Form>
            <FormikInputField type="text" name="task" placeholder="Tarefa" />
            <FormikInputField type="text" name="deadline" placeholder="Prazo" />
            <FormikInputField
              type="text"
              name="members"
              placeholder="Membro(s)"
            />
            <SubmitButton label="Adicionar" type="submit" />
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Adicionar macros, micros e complementos</h2>
        <Formik
          initialValues={macrosInitialValues}
          onSubmit={(values) => handleMacros(values)}
          validationSchema={validationMacros}
        >
          <Form>
            <FormikSelectField
              name="type"
              placeholder="Tipo"
              options={[
                { id: 1, name: "Macro" },
                { id: 2, name: "Micro" },
                { id: 3, name: "Complemento" },
              ]}
            />
            <FormikInputField type="text" name="name" placeholder="Nome" />
            <SubmitButton label="Adicionar" type="submit" />
          </Form>
        </Formik>
      </div>
      <div>
        <h2>Gerenciar membros</h2>
        <Formik
          initialValues={membersInitialValues}
          onSubmit={(values) => handleMembers(values)}
          validationSchema={validationMembers}
        >
          <Form>
            <FormikSelectField name="id" placeholder="Membro" options={[]} />
            <FormikSelectField name="role" placeholder="Cargo" options={[]} />
            <FormikSelectField
              name="system"
              placeholder="Sistema"
              options={[]}
            />
            <FormikSelectField
              name="subsystem"
              placeholder="Subsistema"
              options={[]}
            />

            <SubmitButton label="Atualizar" type="submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};
