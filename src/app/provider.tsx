"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"

export default function RootLayout(props: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <ChakraProvider value={defaultSystem}>
        <div style={{ visibility: "hidden" }}>
          {props.children}
        </div>
      </ChakraProvider>
    )
  }

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="theme"
      >
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}