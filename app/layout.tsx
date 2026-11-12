import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const description =
  "Sweta Das: Computer Science at Virginia Tech. Production LLM APIs, AI evaluation research, and technology consulting.";

export const metadata: Metadata = {
  title: "Sweta Das | Software, AI & Consulting",
  description,
  keywords: ["Sweta Das", "Virginia Tech", "Software Engineer", "AI", "LLM", "Technology Consulting", "Portfolio"],
  authors: [{ name: "Sweta Das" }],
  openGraph: {
    title: "Sweta Das | Software, AI & Consulting",
    description,
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}