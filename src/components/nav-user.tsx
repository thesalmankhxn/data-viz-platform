"use client";

import { LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import { Dialog } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import UserAvatar from "@/components/user-avatar";
import { useAuth } from "@/hooks/use-auth";
import { useProfileStore } from "@/stores/useProfileStore";
import { UserIcon } from "./Icons";

export function NavUser() {
  const { isMobile } = useSidebar();
  const { admin: user } = useProfileStore();
  const { logout } = useAuth();

  const handleLogout = () => logout();

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground py-0!"
                >
                  <div className="cursor-pointer">
                    <UserIcon />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-56"
                align="start"
                side={isMobile ? "top" : "right"}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserAvatar
                      name={user?.name || "User"}
                      imageUrl={user?.profilePhoto}
                    />

                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold capitalize">
                        {user?.name || "User"}
                      </span>
                      <span className="truncate text-xs">
                        {user?.email || "No email"}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Dialog>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
