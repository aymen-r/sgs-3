import React from "react";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <div className="content-cards1">
        <ul className="menu">
          <li className="menu-item menu-active">Our Services</li>
          <li className="menu-item">Our Company</li>
          <li className="menu-item">News, Media & Resources</li>
          <li className="menu-item">Contact Us</li>
          <li className="menu-item">SGS Offices & Labs</li>
        </ul>
        <div className="features">
          <p className="menu-par">
            We are the world's leading testing, inspection and certification
            company
          </p>
          <span>about us</span>
        </div>
      </div>
      <div className="content-cards2">
        <div className="row1">
          <div className="card1 ">
            <img src="/img/card/main-feature-glass-building.jpg" alt="" />
            <div className="card-body1 box">
              <h5>SGS in Brazil</h5>
              <p>
                Operating in Brazil since 1938, SGS has 36 offices and more than
                30 laboratories in major cities and ports around the country,
                employing over 3,500 people.
              </p>
            </div>
          </div>
          <div className="card2">
            <img src="/img/card/main-feature-long-bridge.jpg" alt="" />
            <div className="card-body2 box">
              <h5>Expertise</h5>

              <p>
                Our core service activities cover all industry sectors and touch
                the products and services that consumers around the world rely
                on every day.
              </p>
            </div>
          </div>
          <div className="card3 card-mobile">
            {" "}
            <img src="/img/card/main-feature-global-cogs.jpg" alt="" />
            <div className="card-body3 box">
              <h5>Office Directory</h5>
              <p>
                The SGS network comprises over 2,600 offices and laboratories
                and more than 96,000 employees around the world.
              </p>
            </div>
          </div>
          <div className="card4 card-mobile">
            <img src="/img/card/main-feature-colorful-news.jpg" alt="" />
            <div className="card-body4 box">
              <h5>Integrity at SGS</h5>
              <p>Sessões de Treinamento | Treinamento</p>
              <p>
                As leaders in our industry, we hold ourselves to the highest
                standard of professional behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
