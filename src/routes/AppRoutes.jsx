import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Granger from "../pages/Granger/Granger";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Granger" element={<Granger />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
