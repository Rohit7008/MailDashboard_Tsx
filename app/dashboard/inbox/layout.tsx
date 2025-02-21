import MailList from "./@maillist/MailList";
import { ReactNode } from "react";

// Define the expected props for InboxLayout
interface LayoutProps {
  children: ReactNode;
  Maillist: ReactNode; // Ensure this is included
}

export default function InboxLayout({ children, Maillist }: LayoutProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Mail List */}
      <div className="w-1/3 border-r p-4">
        {Maillist}
        <MailList />
        {/* Pass maillist prop instead of directly rendering MailList */}
      </div>

      {/* Selected Mail Content */}
      <div className="w-2/3 p-4">{children}</div>
    </div>
  );
}
