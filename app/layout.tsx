import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s, | Streamwan",
    default: "Streamwan",
  },
  description: "Faster for family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
