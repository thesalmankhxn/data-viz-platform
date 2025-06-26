import { Outlet, useNavigate } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useMemo } from "react";
import { getSidebarStateFromCookie } from "@/lib/utils";
import { TopSection } from "../top-section";

/**
 * MainLayout component serves as the primary layout wrapper for the application.
 * It renders a full viewport-height container and displays nested routes via the <Outlet /> component.
 *
 * @remarks
 * - Handles authentication state and profile data management
 * - Redirects unauthenticated users to login page
 * - Intended to be used as a layout route in React Router.
 *
 * @returns {JSX.Element} The rendered layout with nested route content.
 */
export function MainLayout() {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token, navigate]);

  const defaultSidebarState = useMemo(() => getSidebarStateFromCookie(), []);

  return (
    <SidebarProvider defaultOpen={defaultSidebarState}>
      <AppSidebar />

      <main className="flex flex-col h-svh">
        <TopSection />

        <div className="flex-1 min-h-0 h-full">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
