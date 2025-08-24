"use client"

import { Code, Sparkles } from "lucide-react"
import { useScrollAnimation } from "./hooks/use-scroll-animation"

export default function ProjectsComingSoon() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" })
  const cardsAnimation = useScrollAnimation({ type: "zoom-in", delay: 200 })

  return (
    <section id="projects" className="w-full bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-10 right-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className={`flex flex-col items-center ${headerAnimation.animationClasses}`} ref={headerAnimation.ref}>
            <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>

            <div className="relative">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <span className="text-xl md:text-2xl font-bold text-white">Coming Soon</span>
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>

              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </div>

            <p className="max-w-2xl text-zinc-400 mt-6 text-center">
              I'm currently working on some exciting projects that showcase my skills in React Native and full-stack
              development. Check back soon to see my latest work!
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl ${cardsAnimation.animationClasses}`}
            ref={cardsAnimation.ref}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-6 flex flex-col items-center justify-center h-64 group hover:border-zinc-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center mb-4 group-hover:bg-zinc-800 transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                </div>
                <div className="w-2/3 h-3 bg-zinc-800/80 rounded-full mb-3"></div>
                <div className="w-1/2 h-3 bg-zinc-800/80 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
