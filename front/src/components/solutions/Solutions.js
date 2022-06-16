import React from "react";
import "./solutions.css";

const Solutions = () => {
  return (
    <div className="solutions ">
      <h1>NOSSAS SOLUÇÕES</h1>
      <ul className="sol-list">
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Inspeção</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Verificação</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Testes</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Certificação</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Especializações SGS Academy</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Certificação de Produtos</h3>
        </li>
      </ul>
    </div>
  );
};

export default Solutions;
