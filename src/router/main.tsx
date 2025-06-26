import type { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/dashboard";

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/notifications",
    element: "NotificationsPage",
  },
  {
    path: "/checklist",
    element: "ChecklistPage",
  },
  {
    path: "/cloud",
    element: "CloudPage",
  },
  {
    path: "/settings",
    element: "SettingsPage",
  },
];
