import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer";
import Sidebar from "@/app/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ant-sting",
  description: "AI 증권맨",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* eslint-disable-next-line react/no-children-prop */}
        <Sidebar children={children} />
        <Footer />
      </body>
    </html>
  );
}
