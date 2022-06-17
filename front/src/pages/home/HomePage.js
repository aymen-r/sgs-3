import React from "react";
import Cards from "../../components/cards/Cards";
import Career from "../../components/career/Career";
import Footer from "../../components/footer/Footer";
import Nav2 from "../../components/navbar/Nav2";
import Navbar from "../../components/navbar/Navbar";
import Objectives from "../../components/objectives/Objectives";
import Solutions from "../../components/solutions/Solutions";

const HomePage = () => {
  return (
    <div>
      <Nav2 />
      {/* <Navbar /> */}
      <Cards />
      <Solutions />
      <Objectives />
      <Career />
      <Footer />
    </div>
  );
};

export default HomePage;
