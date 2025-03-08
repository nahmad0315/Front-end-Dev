import type { Metadata } from "next";
import "./globals.css";
import LayoutComponent from "@/components/layout/LayoutComponent";

export const metadata: Metadata = {
  title: "Prop 360°",
  description: "Property Management Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
