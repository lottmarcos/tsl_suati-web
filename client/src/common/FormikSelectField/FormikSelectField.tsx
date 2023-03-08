import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";

import { FormikSelectProps } from "../types";

export const FormikSelectField: React.FC<FormikSelectProps> = ({
  name,
  placeholder,
  options,
}) => {
  const [isPlaceHolder, setIsPlaceHolder] = useState(true);

  const onChange = () => {
    setIsPlaceHolder(false);
  };

  return (
    <div className="FormikInputDiv">
      <Field
        as="select"
        name={name}
        className={isPlaceHolder ? "PlaceholderField" : "SelectField"}
        id={name}
        onChange={onChange}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </Field>
      <div className="FormikErrorMessage">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
