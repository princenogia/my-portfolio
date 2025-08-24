"use client"

import type React from "react"

import { useState, useRef } from "react"
// @ts-ignore
import { Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import { useScrollAnimation } from "./hooks/use-scroll-animation"
import emailjs from "@emailjs/browser"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | "success" | "error">(null)
  const [statusMessage, setStatusMessage] = useState("")

  const formRef = useRef<HTMLFormElement>(null)
  const leftColAnimation = useScrollAnimation({ type: "fade-right" })
  const rightColAnimation = useScrollAnimation({ type: "fade-left" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !message) {
      setStatus("error")
      setStatusMessage("Please fill in all fields")
      return
    }

    try {
      setLoading(true)
      setStatus(null)

      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!)

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: process.env.NEXT_PUBLIC_EMAILJS_RECEIVER_EMAIL,
        reply_to: email,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
      )

      setStatus("success")
      setStatusMessage("Your message has been sent successfully!")

      setName("")
      setEmail("")
      setMessage("")

      setTimeout(() => {
        setStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus("error")
      setStatusMessage("Failed to send message. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="w-full bg-black py-24 relative overflow-hidden">
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-10 left-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Text */}
            <div className={leftColAnimation.animationClasses} ref={leftColAnimation.ref}>
              <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-zinc-400 mb-8">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always
                open to new ideas and collaborations.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-zinc-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-zinc-400 text-sm">iamp33067@gmail.com</p>
                </div>
              </div>

              <div className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-lg">
                <p className="text-zinc-300 italic text-sm">
                  "I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                  vision."
                </p>
              </div>
            </div>

            <div
              className={`bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-6 lg:p-8 relative overflow-hidden group ${rightColAnimation.animationClasses}`}
              ref={rightColAnimation.ref}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">{statusMessage}</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                  {status === "error" && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <p className="text-red-200 text-sm">{statusMessage}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                        className="w-full bg-zinc-900/70 border border-zinc-800 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 w-0 group-hover:w-full"></div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        required
                        className="w-full bg-zinc-900/70 border border-zinc-800 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                      />
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 w-0 group-hover:w-full"></div>
                    </div>

                    <div className="relative">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full bg-zinc-900/70 border border-zinc-800 rounded-md px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 resize-none"
                      ></textarea>
                      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 w-0 group-hover:w-full"></div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-transparent w-full disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
                      <span className="relative flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white">
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
