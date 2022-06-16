import React from "react";
import "./objectiv.css";

const Objectives = () => {
  return (
    <div className="obj-numbers">
      <h2>NOSSO OBJETIVO</h2>
      <div className="objs">
        <div className="obj">
          <h3>Melhor</h3>
          <p>Ajudamos as empresas a negociar com integridade e confiança</p>
        </div>
        <div className="obj">
          <h3>Seguro</h3>
          <p>Nós garantimos a segurança no dia a dia, em casa e no trabalho</p>
        </div>
        <div className="obj">
          <h3>Interligados</h3>
          <p>
            Ajudamos novas tecnologias a alcançar rapidamente os consumidores
          </p>
        </div>
      </div>
      <div className="more-links">
        <button>Saiba Mais</button>
      </div>
    </div>
  );
};

export default Objectives;
