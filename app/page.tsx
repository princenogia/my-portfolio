"use client"

import { useEffect } from "react"
import AboutSection from "../about-section"
import Footer from "../footer"
import ProjectsSection from "../projects-section"
import TechnicalSkills from "../technical-skills"
import NewsletterForm from "../newsletter-form"
import Header from "../header"
import FloatingSidebar from "../floating-sidebar"
import ExperienceSection from "../experience-section"
import { AnimationProvider } from "../components/animation-provider"
import { smoothScroll } from "../utils/smooth-scroll"

export default function Page() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Use a small timeout to ensure the page is fully loaded
        setTimeout(() => {
          smoothScroll(id, 1000)
        }, 100)
      }
    }
  }, [])

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-black text-white">
        <FloatingSidebar />

        <div id="home">
          <Header />
        </div>

        <AboutSection />

        <ExperienceSection />

        <TechnicalSkills />

        <ProjectsSection />

        <NewsletterForm />

        <Footer />
      </div>
    </AnimationProvider>
  )
}
