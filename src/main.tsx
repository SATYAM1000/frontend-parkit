import { createRoot } from "react-dom/client";
import "./global.css";
import { RouterProvider } from "react-router";
import appRouter from "./router";

const app = document.getElementById("root");
if (app) {
  createRoot(app).render(<RouterProvider router={appRouter} />);
}
