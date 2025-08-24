"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
//@ts-ignore
import { Home, User, Code, FolderKanban, Mail, Menu, X, Briefcase } from 'lucide-react'
import { smoothScroll } from "./utils/smooth-scroll"

export default function FloatingSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "contact"]

      // Find the section that is currently most visible in the viewport
      let maxVisibleSection = ""
      let maxVisiblePercentage = 0

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Calculate how much of the section is visible in the viewport
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        const sectionHeight = rect.height
        const visiblePercentage = sectionHeight > 0 ? visibleHeight / sectionHeight : 0; // Avoid division by zero

        if (visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage
          maxVisibleSection = section
        }
      }

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial active section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Use our smooth scroll utility
    smoothScroll(sectionId, 1000)

    if (isMobile) {
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <FolderKanban className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            initial={{
              x: isMobile ? 300 : 0,
              opacity: isMobile ? 0 : 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: isMobile ? 300 : 0,
              opacity: isMobile ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed  ${
              isMobile ? "inset-0 bg-black/80 z-40" : "top-1/3 right-6 transform -translate-y-1/2 z-30"
            }`}
          >
            <motion.nav
              className={`flex ${
                isMobile ? "h-full w-64 flex-col justify-center items-center" : "flex-col items-center"
              } ${isMobile ? "ml-auto bg-zinc-900/95 border-l border-zinc-800/50" : ""}`}
            >
              <div
                className={`
                  ${isMobile ? "w-full py-8" : "py-4 px-3 rounded-full backdrop-blur-md bg-zinc-900/70 border border-zinc-800/50 shadow-xl"}
                  flex ${isMobile ? "flex-col" : "flex-col"} gap-4
                `}
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`
                      relative flex ${isMobile ? "flex-row justify-start px-8" : "flex-col justify-center"} items-center
                      ${isMobile ? "py-4" : "p-2"} rounded-full transition-all duration-300
                      ${activeSection === item.id ? "text-white" : "text-zinc-400 hover:text-white"}
                    `}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className={`absolute inset-0 ${isMobile ? "rounded-none" : "rounded-full"} bg-blue-600 bg-opacity-50 -z-10`}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className={`${isMobile ? "mr-3" : ""}`}>{item.icon}</span>
                    {isMobile && <span className="text-sm font-medium">{item.label}</span>}

                    {!isMobile && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                        {item.label}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
