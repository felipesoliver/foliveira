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
      <body className={`${manrope.variable} ${vollkorn.variable} opacity-0 animate-fadein`}>
        <span className="grid-graphism" />
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}