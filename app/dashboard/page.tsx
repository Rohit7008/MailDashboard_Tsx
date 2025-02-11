"use client";

import Link from "next/link";
import type React from "react"; // Added import for React
import { AppSidebar } from "../../components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      
      {/* Ensuring sidebar and content are in a flex container */}
      <div className="flex h-screen w-full">

        {/* Main Content Wrapper */}
        <div className="flex flex-1 flex-col h-full">
          <header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4">
            <h1 className="text-2xl font-bold">Welcome to your Inbox</h1>
            <p>Select an email from the sidebar to view its contents.</p>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
} 