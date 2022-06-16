import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="content-cards1">
        <ul className="menu">
          <li className="menu-item menu-active">O Que Fazemos</li>
          <li className="menu-item">A Empresa</li>
          <li className="menu-item">Notícias, Mídia e Recursos</li>
          <li className="menu-item">Contate-nos</li>
          <li className="menu-item">Escritórios e Laboratórios SGS</li>
        </ul>
        <div className="features">
          <p className="menu-par">
            SGS é a empresa líder mundial em inspeção, verificação, testes e
            certificação.
          </p>
          <span>Sobre nós</span>
        </div>
      </div>
      <div className="content-cards2">
        <div className="row1">
          <div className="card1">
            <img src="/img/vineyard.jpg" alt="" />
            <div className="card-body1 box">
              <h5>Manejo Nutricional de Pastagens</h5>
              <p>
                Notícias dos nossos Negócios | Produtos Agrícolas e Alimentos{" "}
                <br />
                Descubra os benefícios de fazer o mapeamento e manejo
                nutricional adequados de seu pasto
              </p>
            </div>
          </div>
          <div className="card2">
            <img src="/img/businessman.jpg" alt="" />
            <div className="card-body2 box2">
              <h5>Soluções de Auditoria Remota</h5>
              <p>Newsletter | Sobre a SGS </p>
              <p>
                Mantenha sua certificação com as soluções de Auditoria Remotas
                da SGS. Sua companheira de conformidade durante esta época de
                dificuldade.
              </p>
            </div>
          </div>
          <div className="card3">
            {" "}
            <img src="/img/tractor.jpg" alt="" />
            <div className="card-body3 box">
              <h5>Classificação de Solo</h5>
              <p>
                Notícias dos nossos Negócios | Produtos Agrícolas e Alimentos
              </p>
              <p>
                Descubra os benefícios de conhecer a classificação do solo de
                sua propriedade
              </p>
            </div>
          </div>
          <div className="card4">
            <div className="card-body4 box2">
              <h5>SGS Academy: Cursos, Treinamentos e In Company</h5>
              <p>Sessões de Treinamento | Treinamento</p>
              <p>
                A SGS Academy tem um grande portfólio de cursos presenciais de
                curta e média duração, In Company e à distância, para cada fase
                da sua carreira. Conheça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
