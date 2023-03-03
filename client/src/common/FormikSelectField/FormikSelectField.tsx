import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";
import { FormikFieldProps } from "../types";
import { Form } from "react-bootstrap";

export const FormikSelectField: React.FC<FormikFieldProps> = ({
  type,
  name,
  placeholder,
}) => {
  const [isPlaceHolder, setIsPlaceHolder] = useState(true);

  const onChange = () => {
    setIsPlaceHolder(false);
  };

  return (
    <div className="FormikInputDiv">
      {/* <Field
        as="select"
        type={type}
        name={name}
        values={mockedData}
        placeholder={placeholder}
        className="FormikInputField"
      /> */}
      <Form.Select
        onChange={onChange}
        className={isPlaceHolder ? "PlaceholderField" : "SelectField"}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option onChange={onChange}>teste2</option>
        <option onChange={onChange}>teste3</option>
        <option onChange={onChange}>teste4</option>
      </Form.Select>
      <div className="FormikErrorMessage">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
