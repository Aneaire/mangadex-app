import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { CookiesProvider } from "next-client-cookies/server";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOONU ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className}`}>
        <Header />
        <main className=" px-2 md:px-5 mt-6 max-w-5xl mx-auto min-h-screen">
          <CookiesProvider>{children}</CookiesProvider>
        </main>
      </body>
    </html>
  );
}
