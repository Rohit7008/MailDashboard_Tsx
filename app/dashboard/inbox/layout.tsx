// app/dashboard/inbox/layout.tsx
"use client";

import { usePathname } from "next/navigation";
import MailList from "./MailList";

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // If the pathname is exactly "/dashboard/inbox", no mail is selected.
  const isMailSelected = pathname !== "/dashboard/inbox";

  return (
    <div className="flex h-screen w-full">
      {isMailSelected ? (
        <>
          {/* Mail list shrinks to 1/3 width */}
          <div className="w-1/3">
            <MailList />
          </div>
          {/* Mail detail view takes up 2/3 width */}
          <div className="w-2/3">{children}</div>
        </>
      ) : (
        // When no mail is selected, display the full-width mail list.
        <div className="w-full">
          <MailList />
        </div>
      )}
    </div>
  );
}
