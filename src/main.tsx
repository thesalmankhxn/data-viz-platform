import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/theme-provider";
import { router } from "./router";
import "./styles/globals.css";
import AppProvider from "./providers/app-provider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <AppProvider>
      <RouterProvider router={router} />
      <Toaster expand={false} richColors />
    </AppProvider>
  </ThemeProvider>
);
