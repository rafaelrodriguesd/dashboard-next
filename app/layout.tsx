import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-day-picker/dist/style.css'
import RouterLoading from "./components/routerloading";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard BLC",
  description: "Dashboard para indicadores de fidelização de clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <RouterLoading />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
        
            <Sidebar />

            <main className="min-h-[calc(100vh-132px)] bg-gray-200" style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
              
              {children}
            </main>
        </div>

      </body>
    </html>
    
  );
}
