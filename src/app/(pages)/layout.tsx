'use client'

import { manrope, vollkorn } from "../fonts"
import useStateController from "@/hooks/use-state-controller"
import { twMerge } from "tailwind-merge"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {selectedTheme} = useStateController()

  return (
    <>
      <body className={twMerge(
        'opacity-0 animate-fadein',
        manrope.variable,
        vollkorn.variable,
        selectedTheme === 'light' ? 'bg-white' : 'bg-black'
      )}>
        <span className="grid-graphism" />
        <Header/>
        {children}
        <Footer/>
      </body>
    </>
  )
}


