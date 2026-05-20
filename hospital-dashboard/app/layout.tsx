import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard Hospitalar",
  description: "Sistema de gestão hospitalar",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 border-r bg-muted/40 p-6">
            <h2 className="text-xl font-bold mb-8">
              Grupo IT Quality
            </h2>

            <nav className="space-y-4">
              <a href="#" className="block text-sm hover:text-primary">
                Dashboard
              </a>
              <a href="#" className="block text-sm hover:text-primary">
                Relatórios
              </a>
              <a href="#" className="block text-sm hover:text-primary">
                Configurações
              </a>
              <a href="#" className="block text-sm hover:text-primary">
                Suporte
              </a>
              <a href="#" className="block text-sm hover:text-primary">
                Conheça nossa empresa
              </a>
            </nav>
          </aside>

          {/* Conteúdo */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}