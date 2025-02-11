"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Inbox, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NavUser } from "./nav-user";
import { AccountSwitcher } from "./account-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sampleData } from "@/lib/sample-data";

// Define Sidebar Menu Items
const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Inbox", href: "/dashboard/inbox", icon: Inbox },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sidebar
      collapsible
      className={`overflow-hidden ${collapsed ? "w-16" : "w-64"}`}
      {...props}
    >
      <header className="sticky top-0 z-10 bg-white p-4 border-b">
        <SidebarHeader className="top-0 z-10 p-4  flex justify-between items-center">
          <AccountSwitcher />
        </SidebarHeader>
      </header>
      {/* Main Navigation */}
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map(({ name, href, icon: Icon }) => (
            <SidebarMenuItem key={href}>
              <SidebarMenuButton
                asChild
                className={`flex items-center gap-3 px-4 py-2 ${
                  pathname === href ? "bg-gray-100 dark:bg-gray-800" : ""
                }`}
                aria-label={name}
                onClick={() => name === "Inbox" && setCollapsed(!collapsed)}
              >
                <Link href={href} className="flex items-center gap-3">
                  <Icon className="size-6" />
                  {!collapsed && (
                    <span className="text-sm font-medium">{name}</span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer with NavUser */}
      <SidebarFooter className="p-4 border-t">
        {!collapsed && <NavUser user={sampleData.accounts[0]} />}
      </SidebarFooter>
    </Sidebar>
  );
}
