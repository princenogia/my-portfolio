"use client"

import { Code, ExternalLink, Github, Globe } from "lucide-react"
import { useScrollAnimation } from "./hooks/use-scroll-animation"
import Image from "next/image"

export default function ProjectsSection() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" })
  const projectsAnimation = useScrollAnimation({ type: "fade-up", delay: 200 })

  const projects = [
    {
      id: 1,
      title: "NogencyDev",
      description:
        "A freelance service inquiry platform that simplifies how independent developers receive and manage client project requests through intelligent automation.",
      longDescription:
        "NogencyDev is a freelance service inquiry platform designed to help independent developers manage client project requests more efficiently. It provides a centralized space where clients can explore services and submit detailed inquiries in a structured, professional way. The platform uses EmailJS to capture key project details—like type, budget, timeline, and contact info—and instantly notifies the developer via email. NogencyDev is more than a static page; it is a functional onboarding tool that automates early client communication and minimizes manual back-and-forth. It was built to solve a common freelancer challenge: managing inquiries at scale while maintaining a polished, professional experience.",
      image: "/images/nogencydev-thumbnail.png",
      liveUrl: "https://nogencydev.vercel.app/",
      githubUrl: "#", // Add your GitHub URL if available
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "EmailJS", "Vercel"],
      category: "Web Development",
      featured: true,
      status: "Live",
    },
  ]

  return (
    <section id="projects" className="w-full bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-10 right-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col items-center justify-center text-center mb-16 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="max-w-2xl text-zinc-400 text-center">
            A showcase of my recent work in web development and digital solutions, demonstrating my skills in modern
            technologies and design.
          </p>
        </div>

        <div className={`${projectsAnimation.animationClasses}`} ref={projectsAnimation.ref}>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden hover:border-zinc-700/70 transition-all duration-500 hover:bg-zinc-900/50"
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                        aria-label="View Live Project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                          aria-label="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm mb-6 leading-relaxed">{project.longDescription}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-blue-400" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-zinc-800/50 text-zinc-300 rounded-full border border-zinc-700/50 hover:border-zinc-600/70 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-transparent flex-1"
                    >
                      <span className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-out group-hover/btn:translate-y-0"></span>
                      <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover/btn:text-white">
                        <Globe className="w-4 h-4" />
                        View Live Site
                      </span>
                    </a>

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-md bg-zinc-900/50 border border-zinc-700/50 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-zinc-600/70 hover:bg-zinc-800/50"
                      >
                        <span className="relative flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Source Code
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className="text-zinc-400 text-sm">More projects coming soon...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
