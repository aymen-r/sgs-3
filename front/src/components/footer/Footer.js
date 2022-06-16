import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer1">
        <h1>Conecte-se conosco </h1>
        <img src="/img/social-footer.png" alt="" />
        <p>© 2022 SGS SA</p>
      </div>
      <div className="footer2">
        <ul>
          <li>Termos e Condições</li>
          <li>Termos de Acesso</li>
          <li>Privacidade</li>
          <li>Cookies</li>
          <li>Lista de escritórios</li>
          <li>Mapa do site </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
