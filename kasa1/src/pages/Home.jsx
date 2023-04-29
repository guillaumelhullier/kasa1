import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MainIndex from "../components/MainIndex";

const Home = () => {
  return (
    <div>
      {/*Réception du composant Header */}
      <Header showBorder={true} />
      {/*Réception du composant Banner */}
      <Banner />
      {/*Réception du composant MainIndex */}
      <MainIndex />
      {/*Réception du composant Footer */}
      <Footer marginTop={50} />
    </div>
  );
};

export default Home;
