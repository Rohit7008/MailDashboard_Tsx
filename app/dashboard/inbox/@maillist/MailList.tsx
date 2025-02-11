"use client";

import Link from "next/link";
import { sampleData } from "@/lib/sample-data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function MailList() {
  return (
    <div className="flex flex-col w-full">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-white p-4 border-b ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard/inbox">Inbox</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Divider Line */}
        <div className="border-b mt-2"></div>

        {/* Inbox Title */}
        <h1 className="text-3xl font-bold mt-4">Inbox</h1>
      </header>

      {/* Scrollable Mail List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {sampleData.mails.map((mail) => (
          <Link key={mail.id} href={`/dashboard/inbox/${mail.id}`}>
            <div className="cursor-pointer flex flex-col border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-all">
              {/* Sender & Date */}
              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-medium">{mail.name}</span>
                <span className="text-xs text-gray-500">{mail.date}</span>
              </div>

              {/* Subject */}
              <div className="font-semibold text-gray-900 mt-1">
                {mail.subject}
              </div>

              {/* Email Teaser */}
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                {mail.teaser}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
