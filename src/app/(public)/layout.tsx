import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Navbar from '@/components/Navbar';
import "../globals.css";
const inter = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mission",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}