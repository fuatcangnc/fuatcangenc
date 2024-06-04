import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Designer & Front-End Developer",
  description: "Fuatcan Genc is a UI Designer based in Istanbul, Turkiye. He focuses on creating simple, usable, visually appealing websites and interfaces.",
  icons:{
    icon:'/icon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container max-w-[80%] mx-auto`}>
        <Header></Header>
        <div className="">{children}</div>
          <Footer></Footer>
        </body>
    </html>
  );
}
