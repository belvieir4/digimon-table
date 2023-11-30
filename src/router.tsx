import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: null, // layout geral
    children: [
      {
        path: "",
        element: <Home />, // pagina da tabela
      },
      {
        path: "digimon/:id",
        element: <Detail />, // pagina de detalhe
      },
    ],
  },
]);
