import {
  Inbox as InboxIcon,
  Send,
  FileText,
  Archive as ArchiveIcon,
  Trash2,
} from "lucide-react";

// Import mail components
import Archive from "./mail/Archive";
import Drafts from "./mail/Drafts";
import Inbox from "../app/dashboard/mail/Inbox";
import Sent from "./mail/Sent";
import Trash from "./mail/Trash";

// Define mailComponents with corresponding icons
export const mailComponents: Record<
  string,
  { component: () => React.JSX.Element; icon: React.ElementType }
> = {
  Inbox: { component: Inbox, icon: InboxIcon },
  Sent: { component: Sent, icon: Send },
  Drafts: { component: Drafts, icon: FileText },
  Archive: { component: Archive, icon: ArchiveIcon },
  Trash: { component: Trash, icon: Trash2 },
};
