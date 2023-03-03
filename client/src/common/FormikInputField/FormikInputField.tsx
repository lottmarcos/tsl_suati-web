import React from "react";
import { ErrorMessage, Field } from "formik";
import { FormikFieldProps } from "../types";

export const FormikInputField: React.FC<FormikFieldProps> = ({
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
