import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { manrope, vollkorn } from "./fonts";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${manrope.variable} ${vollkorn.variable}`}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}