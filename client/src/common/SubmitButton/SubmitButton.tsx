import React from "react";

export type SubmitButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  type,
  onClick,
}) => {
  return (
    <div className="SubmitButtonDiv">
      <button className="SubmitButton" onClick={onClick} type={type}>
        {label}
      </button>
    </div>
  );
};
