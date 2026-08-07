import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shannon Crandley | Computer Engineer",
  description: "Portfolio of Shannon Crandley, a Computer Engineering student at Tufts University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
