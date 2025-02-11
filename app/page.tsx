import Dashboard from "./dashboard/page";
import { AppSidebar } from "../components/app-sidebar"; // Adjust path if necessary
import { SidebarProvider } from "@/components/ui/sidebar"; // Ensure correct import path

export default function Page() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1">
          <Dashboard />
        </div>
      </div>
    </SidebarProvider>
  );
}
