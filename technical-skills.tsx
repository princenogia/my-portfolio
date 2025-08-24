"use client"

import { Code, Database, Globe, Layout, Smartphone, FileCode, Palette, Server } from "lucide-react"
import { useScrollAnimation } from "./hooks/use-scroll-animation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TechnicalSkills() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" })
  const skillsAnimation = useScrollAnimation({ type: "fade-up", delay: 100 })

  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Frontend", "Backend", "Mobile", "Database"]

  const skills = [
    {
      name: "HTML",
      icon: <FileCode className="w-4 h-4" />,
      level: 95,
      categories: ["Frontend"],
    },
    {
      name: "CSS",
      icon: <Palette className="w-4 h-4" />,
      level: 90,
      categories: ["Frontend"],
    },
    {
      name: "JavaScript",
      icon: <Code className="w-4 h-4" />,
      level: 90,
      categories: ["Frontend", "Backend"],
    },
    {
      name: "TypeScript",
      icon: <Code className="w-4 h-4" />,
      level: 85,
      categories: ["Frontend", "Backend"],
    },
    {
      name: "Tailwind",
      icon: <Palette className="w-4 h-4" />,
      level: 90,
      categories: ["Frontend"],
    },
    {
      name: "ReactJS",
      icon: <Layout className="w-4 h-4" />,
      level: 88,
      categories: ["Frontend"],
    },
    {
      name: "React Native",
      icon: <Smartphone className="w-4 h-4" />,
      level: 85,
      categories: ["Mobile", "Frontend"],
    },
    {
      name: "MySQL",
      icon: <Database className="w-4 h-4" />,
      level: 80,
      categories: ["Database", "Backend"],
    },
    {
      name: "PHP",
      icon: <Server className="w-4 h-4" />,
      level: 75,
      categories: ["Backend"],
    },
    {
      name: "AJAX",
      icon: <Globe className="w-4 h-4" />,
      level: 85,
      categories: ["Frontend"],
    },
    {
      name: "Laravel",
      icon: <Server className="w-4 h-4" />,
      level: 70,
      categories: ["Backend"],
    },
    {
      name: "NextJS",
      icon: <Globe className="w-4 h-4" />,
      level: 80,
      categories: ["Frontend", "Backend"],
    },
    {
      name: "jQuery",
      icon: <Code className="w-4 h-4" />,
      level: 85,
      categories: ["Frontend"],
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-4 h-4" />,
      level: 75,
      categories: ["Database", "Backend"],
    },
  ]

  const filteredSkills =
    activeCategory === "All" ? skills : skills.filter((skill) => skill.categories.includes(activeCategory))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const skillVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const activeIndicatorVariants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.3 } },
  }

  return (
    <section id="skills" className="w-full bg-black py-16 relative overflow-hidden">
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-20 right-1/3 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col items-center justify-center text-center mb-8 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
              <Code className="w-5 h-5 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Technical Skills</h2>
          <p className="max-w-2xl text-zinc-400 text-center text-sm">
            A collection of technologies and tools I've mastered throughout my journey as a developer.
          </p>
        </div>

        <div className="flex justify-center mb-6 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 relative ${
                activeCategory === category
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-300"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 -z-10"
                  layoutId="activeCategory"
                  initial="initial"
                  animate="animate"
                  variants={activeIndicatorVariants}
                />
              )}
            </button>
          ))}
        </div>

        <div className={`${skillsAnimation.animationClasses}`} ref={skillsAnimation.ref}>
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-3 rounded-md bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 hover:bg-zinc-900/80"
                    variants={skillVariants}
                  >
                    <div className="flex-shrink-0 bg-zinc-800/80 p-2 rounded-md mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-colors duration-300">
                      {skill.icon}
                    </div>

                    <span className="text-white text-xs font-medium mb-1.5">{skill.name}</span>

                    <div className="w-full h-1 bg-zinc-800/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:animate-pulse"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      ></motion.div>
                    </div>

                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-zinc-800 rounded-md px-2 py-1 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                      {skill.categories.join(", ")}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
