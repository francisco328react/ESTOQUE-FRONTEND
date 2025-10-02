import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "../components/layout/Sidebar/Sidebar";
import { Navbar } from "../components/layout/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Sistema de Estoque",
  description: "Gerenciamento de estoque com Next.js + TypeScript + Tailwind + HeroUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900 flex h-screen w-screen">
        {/* Sidebar fixa */}
        <Sidebar />

        <div className="flex flex-col flex-1">
          {/* Navbar no topo */}
          <Navbar />

          {/* Conteúdo principal */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
