"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { sampleData } from "@/lib/sample-data"; // Ensure correct import
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


export default function InboxPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="flex flex-1 flex-col h-full">
          <header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>

          {/* Inbox Content */}
          <div className="flex flex-1 flex-col p-4 overflow-y-auto">
            <h1 className="text-2xl font-bold">Inbox</h1>

            {/* Email List */}
            <div className="mt-4 space-y-2">
              {sampleData.mails.map((mail) => (
                <Link
                  href={`/dashboard/mail/${mail.id}`}
                  key={mail.id}
                  className="flex flex-col border p-4 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{mail.name}</span>
                    <span className="text-xs text-gray-500">{mail.date}</span>
                  </div>
                  <div className="font-semibold">{mail.subject}</div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {mail.teaser}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
