import React from "react";
import Error from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

//Routes

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:id" element={<Logement />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
