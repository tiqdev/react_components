import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Examples from "~/pages/examples";
import Home from "~/pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/examples",
        element: <Examples />,
      },
    ],
  },
]);

export default routes;
