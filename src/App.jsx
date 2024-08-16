import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PosPage from "./pages/PosPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pos" element={<PosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
