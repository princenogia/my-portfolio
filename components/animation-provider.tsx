"use client"

import { type ReactNode, useEffect, useState } from "react"
import { LazyMotion, domAnimation } from "framer-motion"

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div style={{ opacity: 0 }}>{children}</div>
  }

  return (
    <LazyMotion features={domAnimation}>
      <div style={{ opacity: 1, transition: "opacity 0.5s ease-in" }}>{children}</div>
    </LazyMotion>
  )
}
