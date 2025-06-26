import * as React from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  CheckList,
  Home,
  Cloud,
  Hamburger,
  Notifications,
  Settings,
} from "@/components/Icons";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Show } from "./show";
import { NavUser } from "./nav-user";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const menuItems = [
  {
    icon: <Home />,
    label: "Home",
    href: "/",
  },
  {
    icon: <Notifications />,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: <CheckList />,
    label: "Checklist",
    href: "/checklist",
  },
  {
    icon: <Cloud />,
    label: "Cloud",
    href: "/cloud",
  },
  {
    icon: <Settings />,
    label: "Settings",
    href: "/settings",
  },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const { toggleSidebar, open } = useSidebar();

  useEffect(() => {
    const activeSidebarButton = document.querySelector(
      '[data-sidebar="menu-sub-button"][data-status="active"]'
    );

    if (activeSidebarButton) {
      activeSidebarButton.scrollIntoView({
        block: "nearest",
      });
    }
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div onClick={toggleSidebar} className="flex items-center gap-2">
          <div className="cursor-pointer">
            <Tooltip>
              <TooltipTrigger>
                <Hamburger />
              </TooltipTrigger>
              <TooltipContent side="right">
                <span>Toggle sidebar (⌘+B)</span>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-0! mt-[12px]">
        <SidebarMenu className="space-y-6 p-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <SidebarMenuButton
                key={item.href}
                asChild
                isActive={isActive}
                tooltip={item.label}
                className="w-full justify-center"
              >
                <Link to={item.href}>
                  <div className="relative flex items-center justify-start gap-2">
                    {/* Background for selected state */}
                    {isActive && (
                      <div className="absolute inset-0 w-[40px] h-[40px] rounded-xl bg-primary/10 border border-border transition-all duration-300 z-0" />
                    )}
                    {/* Icon */}
                    <div
                      className={cn(
                        "relative z-10 flex items-center justify-center w-[40px] h-[40px] hover:text-white",
                        isActive ? "text-white" : "text-[#858882]"
                      )}
                    >
                      {item.icon}
                    </div>

                    <Show when={open}>
                      <span className="text-white text-sm">{item.label}</span>
                    </Show>
                  </div>
                </Link>
              </SidebarMenuButton>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
