import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const RenderRoutes = AppRoutes.map((route) => (
    <Route path={route.path} element={route.element} />
  ));

  return (
    <>
    
      <Routes>{RenderRoutes}</Routes>

    </>
  );
};

export default App;
