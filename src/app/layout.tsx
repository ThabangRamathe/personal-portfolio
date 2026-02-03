import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thabang Ramathe — Software Developer",
  description: "Portfolio, projects, and contact information.",
  metadataBase: new URL("https://your-domain.example"), // change later
  openGraph: {
    title: "Thabang Ramathe — Software Developer",
    description: "Portfolio, projects, and contact information.",
    type: "website",
    url: "https://your-domain.example",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
