import "@/styles/globals.css"
import StateControllerProvider from "@/contexts/state-controller"


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <StateControllerProvider>
        {children}
      </StateControllerProvider>
    </html>
  )
}
