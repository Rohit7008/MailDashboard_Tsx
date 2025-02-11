"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Archive, Trash2, Reply, ReplyAll, Forward, Send } from "lucide-react";
import { sampleData } from "@/lib/sample-data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MailPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const mail =
    sampleData.mails.find((m) => m.id.toString() === params.id) || null;
  const [replyText, setReplyText] = useState("");
  const [isSending, setIsSending] = useState(false);

  if (!mail) {
    return (
      <div className="p-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-xl font-semibold">Email not found</h1>
        <p className="text-gray-500">It may have been deleted or moved.</p>
        <Button
          onClick={() => router.push("/dashboard/inbox")}
          className="mt-4"
        >
          Back to Inbox
        </Button>
      </div>
    );
  }

  // Action Handlers
  const handleArchive = () => {
    console.log(`Archiving email with id ${mail.id}`);
    // TODO: Implement actual archive logic
    router.push("/dashboard/inbox");
  };

  const handleTrash = () => {
    console.log(`Trashing email with id ${mail.id}`);
    // TODO: Implement actual trash logic
    router.push("/dashboard/inbox");
  };

  const handleReply = () => {
    console.log(`Replying to email with id ${mail.id}`);
    // Optionally, you could focus the reply textarea or prefill with quoted text
  };

  const handleReplyAll = () => {
    console.log(`Reply all for email with id ${mail.id}`);
    // TODO: Implement reply all functionality
  };

  const handleForward = () => {
    console.log(`Forwarding email with id ${mail.id}`);
    // TODO: Implement forward functionality
  };

  // Simulate sending a reply asynchronously
  const handleSendReply = async () => {
    if (!replyText.trim()) return; // Prevent sending empty replies
    setIsSending(true);
    // Simulate a network request (e.g., call an API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Reply sent: ${replyText}`);
    setReplyText("");
    setIsSending(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex justify-between p-4 border-b">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleArchive}>
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleTrash}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={handleReply}>
            <Reply className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleReplyAll}>
            <ReplyAll className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleForward}>
            <Forward className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 overflow-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{mail.subject}</h1>
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <strong>From:</strong> {mail.name} ({mail.email})
          </p>
          <p>
            <strong>Date:</strong> {mail.date}
          </p>
        </div>
        <div className="whitespace-pre-wrap text-gray-800">{mail.teaser}</div>
      </div>

      {/* Reply Section */}
      <div className="border-t p-4">
        <h2 className="text-lg font-semibold mb-2">Reply</h2>
        <Textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Type your reply here..."
          className="mb-4"
          disabled={isSending}
        />
        <Button
          onClick={handleSendReply}
          className="flex items-center"
          disabled={isSending}
        >
          <Send className="h-4 w-4 mr-2" />
          {isSending ? "Sending..." : "Send Reply"}
        </Button>
      </div>
    </div>
  );
}
