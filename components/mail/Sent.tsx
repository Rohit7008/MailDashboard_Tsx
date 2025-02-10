"use client";

import * as React from "react";
import Link from "next/link";
import { sampleData } from "@/lib/sample-data";

export default function Sent() {
  const sentMails = sampleData.mails.filter((mail) =>
    mail.subject.includes("Sent")
  );

  return (
    <>
      {sentMails.map((mail) => (
        <Link
          key={mail.id}
          href={`/dashboard/mail/${mail.id}`}
          className="email-item"
        >
          <span>{mail.name}</span>
          <span>{mail.subject}</span>
          <span>{mail.date}</span>
        </Link>
      ))}
    </>
  );
}
