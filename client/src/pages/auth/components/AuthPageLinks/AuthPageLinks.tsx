import React from "react";
import "./AuthPageLinks.css";

export type AuthPageLinksProps = {
  text: string;
  link: string;
  href: string;
};

export const AuthPageLinks: React.FC<AuthPageLinksProps> = ({
  text,
  link,
  href,
}) => {
  return (
    <section className="AuthPageLinksSection">
      <p className="AuthPageLinksText">
        {text} <a href={href}>{link}</a>
      </p>
    </section>
  );
};
