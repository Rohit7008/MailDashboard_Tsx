import { ArchiveX, File, Inbox, Send, Trash2, LucideIcon } from "lucide-react";

// Define types for better readability and maintainability
interface Account {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive: boolean;
}

interface Mail {
  id: number;
  name: string;
  email: string;
  subject: string;
  date: string;
  teaser: string;
}

// Define sample data with explicit types
export const sampleData: {
  accounts: Account[];
  navMain: NavItem[];
  mails: Mail[];
  trashMails: Mail[];
  archivedMails: Mail[];
} = {
  accounts: [
    {
      id: 1,
      name: "Work",
      email: "work@example.com",
      avatar: "/avatars/work.jpg",
    },
    {
      id: 2,
      name: "Personal",
      email: "personal@example.com",
      avatar: "/avatars/personal.jpg",
    },
    {
      id: 3,
      name: "Side Project",
      email: "side@example.com",
      avatar: "/avatars/side.jpg",
    },
  ],
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      id: 1,
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
  ],
  trashMails: [],
  archivedMails: [],
};
