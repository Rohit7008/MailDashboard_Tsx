import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      {/* Flex container to structure sidebar and main content */}
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          <SidebarInset className="flex flex-1">{children}</SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
