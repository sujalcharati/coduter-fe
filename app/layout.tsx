import ClientLayout from "./components/ClientLayout"
import React from "react"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ClientLayout >{children}</ClientLayout>
          <Footer />
        </div>
      </body>
    </html>
  )
}
