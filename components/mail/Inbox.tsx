"use client";

import * as React from "react";
import Link from "next/link";
import { sampleData } from "@/lib/sample-data";

export default function Inbox() {
  const inboxMails = sampleData.mails; // Show all mails for Inbox

  return (
    <>
      {inboxMails.map((mail) => (
        <Link
          href={`/dashboard/mail/${mail.id}`}
          key={mail.id}
          className="flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <div className="flex w-full items-center gap-2">
            <span>{mail.name}</span>
            <span className="ml-auto text-xs">{mail.date}</span>
          </div>
          <span className="font-medium">{mail.subject}</span>
          <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
            {mail.teaser}
          </span>
        </Link>
      ))}
    </>
  );
}
