import React from "react";
import { ErrorMessage, Field } from "formik";

export type FormikInputFieldProps = {
  type?: string;
  name: string;
  placeholder: string;
};

export const FormikInputField: React.FC<FormikInputFieldProps> = ({
  type,
  name,
  placeholder,
}) => {
  return (
    <div className="FormikInputDiv">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="FormikInputField"
      />
      <div className="FormikErrorMessage">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
