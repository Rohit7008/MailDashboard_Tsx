"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar"; // Ensure Sidebar is included

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        

        {/* Main Content */}
        <div className="flex flex-1 flex-col h-full">
          <header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Breadcrumb Separator */}
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard/settings">Settings</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p>Manage your preferences and account settings here.</p>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
