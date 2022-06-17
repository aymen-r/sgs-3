import React from "react";
import "./solutions.css";

const Solutions = () => {
  return (
    <div className="solutions ">
      <h1>FEATURED SOLUTIONS</h1>
      <ul className="sol-list">
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Inspection</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Verification</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Testing</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Certification</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>SGS Academy</h3>
        </li>
        <li>
          <img src="/img/featured-solutions.svg" alt="" className="svg-img" />
          <h3>Product Certification</h3>
        </li>
      </ul>
    </div>
  );
};

export default Solutions;
