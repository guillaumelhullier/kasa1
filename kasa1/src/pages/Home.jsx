import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import MainIndex from "../components/MainIndex";

const Home = () => {
  return (
    <div>
      <Header showBorder={true} />
      <Banner />
      <MainIndex />
      <Footer marginTop={50} />
    </div>
  );
};

export default Home;
