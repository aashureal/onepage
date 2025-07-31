import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Homerun from "./pages/Homerun/Homerun";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homerun" element={<Homerun />} />
      </Routes>
    </>
  );
};

export default App;
