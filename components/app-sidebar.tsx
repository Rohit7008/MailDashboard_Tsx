"use client";

import * as React from "react";
import { Command } from "lucide-react";
import Link from "next/link";

import { NavUser } from "./nav-user";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AccountSwitcher } from "./account-switcher";
import { mailComponents } from "./mailComponents"; // Import the mail components with icons

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState("Inbox");
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      {/* Sidebar Menu */}
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              {/* Sidebar Menu */}
              <SidebarMenu>
                {Object.keys(mailComponents).map((key) => {
                  const { component: Component, icon: Icon } =
                    mailComponents[key];

                  return (
                    <SidebarMenuItem key={key}>
                      <SidebarMenuButton
                        tooltip={{ children: key, hidden: false }}
                        onClick={() => {
                          setActiveItem(key);
                          setOpen(true);
                        }}
                        isActive={activeItem === key}
                        className="px-2.5 md:px-2 flex items-center gap-2"
                      >
                        <Icon className="size-5" /> {/* Render the icon */}
                        <span>{key}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <NavUser
            user={{
              name: "User",
              email: "user@example.com",
              avatar: "/images/default-avatar.png",
            }}
          />
        </SidebarFooter>
      </Sidebar>

      {/* Render Active Mail Component */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <AccountSwitcher />
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeItem}
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>Unreads</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Type to search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {React.createElement(mailComponents[activeItem].component)}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
