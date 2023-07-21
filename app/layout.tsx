import Header from "@/components/common/AppHeader/AppHeader";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parsa Rahimi",
  description: "test project for pishro atieh company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
