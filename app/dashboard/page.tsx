"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

export default function InboxIndex() {
  return (
    <>
      {/* Header with Breadcrumb */}
      <header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Centered Message */}
      <div className="flex items-center justify-center h-screen text-2xl font-bold">
        <p>Go to inbox to view Mails</p>
      </div>
    </>
  );
}
