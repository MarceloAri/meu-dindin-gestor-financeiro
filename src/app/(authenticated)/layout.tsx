import "../globals.css";
import { cn } from "@/lib/utils";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { HeaderPageTitle } from "@/components/page-title";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={cn("h-full", "antialiased", "font-sans")}>
      <body className="min-h-full flex flex-col bg-gray-200">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="sticky top-0 z-10 flex h-14 items-center border-b bg-background/80 px-4 backdrop-blur">
              <SidebarTrigger />
              <HeaderPageTitle />
            </header>
            <main className="flex-1 p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
