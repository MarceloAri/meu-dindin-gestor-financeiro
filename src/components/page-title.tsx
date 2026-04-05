"use client";
import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/settings": "Configurações",
};

export function HeaderPageTitle() {
  const pathname = usePathname();
  const title = titles[pathname] ?? "Painel";
  return (
    <p className="ml-2 text-md font-medium text-muted-foreground">{title}</p>
  );
}
