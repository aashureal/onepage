import Granger from "../pages/Granger/Granger";
import Home from "../pages/Home";
import Koel from "../pages/Koels/Koel";

export const AppRoutes = [
  {
    path: "/",
    element: <Home />,
    text: "Home",
  },
  {
    path: "/granger",
    element: <Granger />,
    text: "Granger",
  },
  {
    path: "/koel",
    element: <Koel />,
    text: "Koel",
  },
];
