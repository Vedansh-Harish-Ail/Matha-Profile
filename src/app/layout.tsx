import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mata Refrigeration | Refrigerant Gas & HVAC Supply Experts",
  description: "Trusted supplier of refrigerant gases, compressor oils, copper pipes, and HVAC accessories in Navi Mumbai.",
  icons: {
    icon: "/images/mata_logo_gold.svg",
    shortcut: "/images/mata_logo_gold.svg",
    apple: "/images/mata_logo_gold.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
