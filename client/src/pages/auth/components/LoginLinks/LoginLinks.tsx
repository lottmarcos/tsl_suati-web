import React from "react";
import "./LoginLinks.css";

export const LoginLinks: React.FC = () => {
  return (
    <section className="LoginLinksSection">
      <p className="LoginLinksText">
        Não possui uma conta? <a href="/cadastro">Crie uma conta.</a>
      </p>
      <p className="LoginLinksText">
        Sem acesso? <a href="/cadastro">Recupere sua conta.</a>
      </p>
    </section>
  );
};
