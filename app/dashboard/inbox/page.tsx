"use client";

import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { sampleData } from "@/lib/sample-data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MailPage from "./[id]/page"; // Import mail details page component
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function InboxPage() {
  const router = useRouter();
  const [selectedMailId, setSelectedMailId] = useState<string | null>(null);

  const handleMailClick = (mailId: number) => {
    setSelectedMailId(mailId.toString()); // Store selected mail ID
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar - Shrinks when an email is selected */}
        <div
          className={`transition-all duration-300 ${
            selectedMailId ? "w-1/3" : "w-full"
          } border-r p-4 overflow-y-auto`}
        >
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

          {/* Inbox List */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Inbox</h1>
            <div className="mt-4 space-y-2">
              {sampleData.mails.map((mail) => (
                <div
                  key={mail.id}
                  onClick={() => handleMailClick(mail.id)}
                  className="cursor-pointer flex flex-col border p-4 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{mail.name}</span>
                    <span className="text-xs text-gray-500">{mail.date}</span>
                  </div>
                  <div className="font-semibold">{mail.subject}</div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {mail.teaser}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mail Details - Rendered when an email is selected */}
        {selectedMailId && (
          <div className="w-2/3 p-4">
            <MailPage params={{ id: selectedMailId }} />
          </div>
        )}
      </div>
    </SidebarProvider>
  );
}
