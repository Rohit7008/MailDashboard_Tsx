"use client";

import * as React from "react";
import { LayoutDashboard, Inbox, Settings } from "lucide-react";
import Link from "next/link";

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="overflow-hidden" {...props}>
      {/* Header with Account Switcher */}
      <SidebarHeader className="p-4 border-b">
        <AccountSwitcher />
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent>
        <SidebarMenu>
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 px-4 py-2"
            >
              <Link href="/dashboard">
                <LayoutDashboard className="size-6" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Inbox */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 px-4 py-2"
            >
              <Link href="/dashboard/inbox">
                <Inbox className="size-6" />
                <span className="text-sm font-medium">Inbox</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center gap-3 px-4 py-2"
            >
              <Link href="/app/settings">
                <Settings className="size-6" />
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer with NavUser */}
      <SidebarFooter className="p-4 border-t">
        <NavUser user={sampleData.accounts[0]} />
      </SidebarFooter>
    </Sidebar>
  );
}
