import MailList from "./@maillist/MailList";

interface InboxLayoutProps {
  children: React.ReactNode;
  maillist: boolean; // ✅ Make it required
}

export default function InboxLayout({ children, maillist }: InboxLayoutProps) {
  return (
    <div className="flex h-screen">
      {maillist && (
        <div className="w-1/3 border-r p-4">
          <MailList />
        </div>
      )}
      <div className={maillist ? "w-2/3 p-4" : "w-full p-4"}>{children}</div>
    </div>
  );
}