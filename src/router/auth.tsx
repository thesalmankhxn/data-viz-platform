import type { RouteObject } from "react-router-dom";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
