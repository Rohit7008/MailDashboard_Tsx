import MailList from "./@maillist/MailList";

export default function InboxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar - Mail List */}
      <div className="w-1/3 border-r p-4">
        <MailList />
      </div>

      {/* Right Panel: Render children (either the inbox page or an email page) */}
      <div className="w-2/3 p-4">{children}</div>
    </div>
  );
}
