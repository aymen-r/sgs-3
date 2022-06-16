import React from "react";
import Cards from "../../components/cards/Cards";
import Career from "../../components/career/Career";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Objectives from "../../components/objectives/Objectives";
import Solutions from "../../components/solutions/Solutions";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Solutions />
      <Objectives />
      <Career />
      <Footer />
    </div>
  );
};

export default HomePage;
