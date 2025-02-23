import MailList from "./@maillist/MailList";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function InboxLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Mail List */}
      <div className="w-1/3 border-r p-4">
        <MailList />
      </div>

      {/* Selected Mail Content */}
      <div className="w-2/3 p-4">{children}</div>
    </div>
  );
}
