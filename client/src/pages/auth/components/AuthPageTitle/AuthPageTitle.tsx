import React from "react";
import "./AuthPageTitle.css";

import logo from "../../../../assets/logo.svg";

export type AuthPageTitleProps = {
  label: string;
};

export const AuthPageTitle: React.FC<AuthPageTitleProps> = ({ label }) => {
  return (
    <section className="AuthPageTitleSection">
      <img src={logo} alt="Logo TESLA - UFMG" style={{ paddingLeft: "70px" }} />
      <h1 className="AuthPageTitle">{label}</h1>
    </section>
  );
};
