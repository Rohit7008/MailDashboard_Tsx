
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
    <div className="border-r p-4 overflow-y-auto">
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
              <BreadcrumbLink asChild>
                <Link href="/dashboard/inbox">Inbox</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <div className="mt-4 space-y-2">
          {sampleData.mails.map((mail) => (
            <Link key={mail.id} href={`/dashboard/inbox/${mail.id}`}>
              <div className="cursor-pointer flex flex-col border p-4 rounded-lg hover:bg-gray-100 transition-all">
                <div className="flex justify-between">
                  <span className="font-medium">{mail.name}</span>
                  <span className="text-xs text-gray-500">{mail.date}</span>
                </div>
                <div className="font-semibold">{mail.subject}</div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {mail.teaser}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
