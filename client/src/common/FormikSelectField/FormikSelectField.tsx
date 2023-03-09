import React, { useState } from "react";
import { ErrorMessage, Field } from "formik";

import { FormikSelectProps } from "../types";

export const FormikSelectField: React.FC<FormikSelectProps> = ({
  name,
  placeholder,
  options,
  isDisabled,
  id,
  onSelect,
  isPlaceholderActive,
}) => {
  const [isPlaceHolder, setIsPlaceHolder] = useState(true);

  if (isPlaceholderActive && isPlaceHolder === false) setIsPlaceHolder(true);

  const onChange = () => {
    if (onSelect) onSelect();
    setIsPlaceHolder(false);
  };

  return (
    <div className="FormikInputDiv">
      <Field
        disabled={isDisabled}
        as="select"
        name={name}
        className={
          isPlaceHolder ? "SelectField PlaceholderField" : "SelectField"
        }
        id={id}
        onChange={onChange}
      >
        <option value="0" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option className="option" value={option.id}>
            {option.name}
          </option>
        ))}
      </Field>
      <div className="FormikErrorMessage">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
