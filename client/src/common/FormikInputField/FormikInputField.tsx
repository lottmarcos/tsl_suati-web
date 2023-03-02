import React from "react";
import { Field, ErrorMessage } from "formik";
import "./FormikInputField.css";

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
    <div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="FormikInputField"
      />
      <ErrorMessage component="span" name={name} />
    </div>
  );
};
