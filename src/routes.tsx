import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Home from "./feature/home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";

const Pos = lazy(() => import("./feature/pos/Pos"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "pos", element: <Pos /> },
    ],
  },
];

export default routes;
