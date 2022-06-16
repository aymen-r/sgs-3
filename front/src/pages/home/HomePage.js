import React from "react";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Solutions from "../../components/solutions/Solutions";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Solutions />
      <Footer />
    </div>
  );
};

export default HomePage;
