import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header showBorder={true} />
      <Banner />
      <Footer marginTop={50} />
    </div>
  );
};

export default Home;
