import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";

import { FormikInputField } from "../../../common/FormikInputField/FormikInputField";
import { FormikSelectField } from "../../../common/FormikSelectField/FormikSelectField";
import { SubmitButton } from "../../../common/SubmitButton/SubmitButton";
import { MemberService } from "../../../services/Member";
import { IFillType } from "../types";

interface IState {
  macros: IFillType[];
  micros: IFillType[];
  complements: IFillType[];
}

export const FillPopup: React.FC = () => {
  const [state, setState] = useState<IState>({
    macros: [] as IFillType[],
    micros: [] as IFillType[],
    complements: [] as IFillType[],
  });

  useEffect(() => {
    MemberService.fetchMacros().then((res) =>
      setState({ ...state, macros: res.data })
    );
    MemberService.fetchMicros().then((res) =>
      setState({ ...state, micros: res.data })
    );
  }, []);

  const { macros, micros } = state;

  return (
    <div>
      <h1>Preencher Horas</h1>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        <Form>
          <FormikInputField type="text" name="date" placeholder="Data" />
          <FormikInputField type="text" name="duration" placeholder="Período" />
          <FormikInputField
            type="text"
            name="timeBegin"
            placeholder="Horário Início"
          />
          <FormikInputField
            type="text"
            name="timeEnd"
            placeholder="Horário Término"
          />
          <FormikSelectField
            id="SelectMacro"
            name="macro"
            placeholder="Macro"
            options={macros}
          />
          <FormikSelectField
            id="SelectMicro"
            name="micro"
            placeholder="Micro"
            options={micros}
          />
          <FormikSelectField
            id="SelectComplemento"
            name="complemento"
            placeholder="Complemento"
            options={[]}
          />
          <FormikInputField
            type="text"
            name="description"
            placeholder="Descrição"
          />
          <SubmitButton label="Preencher" />
        </Form>
      </Formik>
    </div>
  );
};
