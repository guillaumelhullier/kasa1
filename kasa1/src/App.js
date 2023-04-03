import React from "react";
import Error from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
