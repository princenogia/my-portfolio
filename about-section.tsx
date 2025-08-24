"use client"

import { User, Code, Briefcase, Award, ArrowRight, GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react"
import { useScrollAnimation } from "./hooks/use-scroll-animation"
import { smoothScroll } from "./utils/smooth-scroll"
import { motion } from "framer-motion"

export default function AboutSection() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" })
  const contentAnimation = useScrollAnimation({ type: "fade-up", delay: 200 })
  const statsAnimation = useScrollAnimation({ type: "fade-up", delay: 300 })
  const educationAnimation = useScrollAnimation({ type: "fade-up", delay: 200 })

  return (
    <section id="about" className="w-full bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col items-center justify-center text-center mb-16 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="max-w-2xl text-zinc-400 text-center">
            Get to know more about me, my background, and what drives my passion for development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className={contentAnimation.animationClasses} ref={contentAnimation.ref}>
            <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer & App Developer</h3>
            <p className="text-zinc-400 mb-6">
              I'm a passionate full-stack developer with a strong foundation in web development and a growing edge in
              mobile app creation. I specialize in building fast, responsive, and cleanly designed applications that
              deliver real value. Whether it’s a complex web platform or a mobile-first experience, I bring ideas to
              life with efficient code and thoughtful design.
            </p>
            <p className="text-zinc-400 mb-6">
              My journey in tech began with a curiosity for how websites work, and it’s grown into a deep commitment to
              crafting high-quality digital solutions that solve real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium">Technical Expertise</h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Specialized in React Native, React.js, Next.js, and modern JavaScript frameworks.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-white font-medium">Approach</h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Detail-oriented with a focus on creating responsive, accessible, and user-friendly applications.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium">Learning</h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Always exploring new technologies and methodologies to stay at the cutting edge.
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-16 ${educationAnimation.animationClasses}`} ref={educationAnimation.ref}>
            <div className="flex items-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mr-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Education Journey</h3>
            </div>

            <div className="relative border-l-2 border-gradient-to-b from-blue-500 to-purple-600 pl-8 ml-4">
              <div className="absolute -left-12 top-20 w-24 h-24 rounded-full bg-blue-500/5 blur-xl"></div>
              <div className="absolute -right-12 top-60 w-32 h-32 rounded-full bg-purple-500/5 blur-xl"></div>
              <div className="absolute left-0 bottom-20 w-16 h-16 rounded-full bg-blue-500/5 blur-lg"></div>

              <motion.div
                className="mb-16 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75"></div>
                </div>

                <div className="absolute -left-[39px] top-5 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-br from-blue-500/20 to-purple-600/20 transform rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">B.Tech in Computer Science & Engineering</h4>
                    </div>
                    <span className="text-purple-400 text-sm flex items-center mt-2 md:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" /> 2021 - Present (Graduating Aug 2025)
                    </span>
                  </div>

                  <h5 className="text-blue-400 font-medium mb-3 ml-10">Delhi Institute of Technology & Management</h5>

                  <div className="flex items-start mb-3 ml-10">
                    <MapPin className="w-4 h-4 text-zinc-500 mr-1 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">
                      Ganaur, Haryana (Affiliated to Guru Gobind Singh Indraprastha University, Delhi)
                    </p>
                  </div>

                  <div className="ml-10 bg-zinc-900/50 rounded-md p-3 border-l-2 border-blue-500/50 group-hover:border-blue-500 transition-colors duration-300">
                    <p className="text-zinc-300 text-sm">
                      Currently in final semester, focusing on full-stack development and modern web technologies.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Computer Science
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Engineering
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400">Final Year</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-16 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10"></div>

                {/* Connecting line from dot to card */}
                <div className="absolute -left-[39px] top-5 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">Senior Secondary (12th)</h4>
                    </div>
                    <span className="text-purple-400 text-sm flex items-center mt-2 md:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" /> Completed July 2021
                    </span>
                  </div>

                  <h5 className="text-blue-400 font-medium mb-3 ml-10">Dwarka International School</h5>

                  <div className="flex items-start mb-3 ml-10">
                    <MapPin className="w-4 h-4 text-zinc-500 mr-1 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">Dwarka Sector-12, New Delhi (CBSE Board)</p>
                  </div>

                  <div className="ml-10 flex items-center gap-2 text-sm text-zinc-400 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Completed with distinction</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      CBSE
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Science Stream
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10"></div>

                {/* Connecting line from dot to card */}
                <div className="absolute -left-[39px] top-5 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">Matriculation (10th)</h4>
                    </div>
                    <span className="text-purple-400 text-sm flex items-center mt-2 md:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-1" /> Completed May 2019
                    </span>
                  </div>

                  <h5 className="text-blue-400 font-medium mb-3 ml-10">Dwarka International School</h5>

                  <div className="flex items-start mb-3 ml-10">
                    <MapPin className="w-4 h-4 text-zinc-500 mr-1 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">Dwarka Sector-12, New Delhi (CBSE Board)</p>
                  </div>

                  <div className="ml-10 flex items-center gap-2 text-sm text-zinc-400 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>Foundation for technical career</span>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      CBSE
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Academic Excellence
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                smoothScroll("contact", 1000)
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-transparent"
            >
              <span className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
