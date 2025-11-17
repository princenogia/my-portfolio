"use client"

import type React from "react"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "./hooks/use-scroll-animation"
import { smoothScroll } from "./utils/smooth-scroll"

export default function Footer() {
  const footerAnimation = useScrollAnimation({ type: "fade-up" })

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    smoothScroll(sectionId, 1000)
  }

  return (
    <footer id="footer" className="w-full bg-black py-20 border-t border-zinc-800/30">
      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-16 ${footerAnimation.animationClasses}`}
          ref={footerAnimation.ref}  
        >
          <div>
            <div className="flex items-baseline mb-4">
              <h3 className="text-xl font-bold text-white">Prince</h3>
              <span className="text-blue-400 ml-1 text-xl">—</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-xs mb-6">
              A passionate developer who crafts mobile-first applications with performance and clean design in mind.
            </p>
            <div className="flex items-center space-x-5">
              <Link
                href="https://github.com/princenogia"
                target="_blank"
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/prince-nogia-0471b3284/"
                target="_blank"
                className="text-zinc-500 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:iamp33067@gmail.com"
                className="text-zinc-500 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:flex md:justify-center">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => scrollToSection(e, "about")}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => scrollToSection(e, "skills")}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={(e) => scrollToSection(e, "projects")}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex md:justify-end">
            <div>
              <h3 className="text-white text-lg font-medium mb-4">Get My Resume</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Download my resume to learn more about my skills and experience.
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1QlCqTv_m6nj1zfaCjqVqevu5GA1tVRbB
"
                download
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-transparent"
              >
                <span className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-zinc-800/30 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-zinc-500 text-xs">© {new Date().getFullYear()} Prince Nogia. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex gap-6">
            <Link href="/privacy" className="text-zinc-500 text-xs hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-500 text-xs hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
