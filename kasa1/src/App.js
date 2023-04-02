import React from "react";
import Error from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
