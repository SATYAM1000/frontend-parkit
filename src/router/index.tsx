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
        Component: lazy(() => import("../pages/authentication/layout")),
        children: [
          {
            path: "/register",
            Component: lazy(() => import("../pages/authentication/register")),
          },
          {
            path: "/login",
            Component: lazy(() => import("../pages/authentication/login")),
          },
        ],
      },
      {
        path: "/parkings",
        Component: lazy(() => import("../pages/parkings")),
        children: [
          {
            path: "/parkings/:spaceId",
            Component: lazy(() => import("../pages/parkings/[id]")),
          },
        ],
      },
    ],
  },
]);

export default appRouter;
