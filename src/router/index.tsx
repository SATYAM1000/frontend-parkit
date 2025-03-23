import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const appRouter = createBrowserRouter([
  {
    Component: lazy(() => import("../pages/layout")),
    children: [
      {
        path: "/",
        Component: lazy(() => import("../pages/home")),
      },
      {
        path: "/parkings",
        Component: lazy(() => import("../pages/parkings")),
        
      },
    ],
  },
]);

export default appRouter;
