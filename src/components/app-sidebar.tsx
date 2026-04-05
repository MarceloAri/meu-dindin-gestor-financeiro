"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { HandCoins, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Configurações",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="">
        <div className="py-2 flex items-center justify-center gap-2 ">
          <HandCoins />
          <div className="group-data-[collapsible=icon]:hidden text-xl font-semibold">
            <h2>Gestor Financeiro</h2>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="bg-white" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    render={<Link href={item.href} />}
                    tooltip={item.title}
                    isActive={pathname === item.href}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="text-sm">
        <div className=" text-muted-foreground group-data-[collapsible=icon]:hidden ">
          2026 Todos os direitos reservados.
        </div>
        <div className="text-[10px] flex flex-col items-center justify-center">
          <p>Version</p>
          <p>0.1.0</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
