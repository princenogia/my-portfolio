"use client"

import { useEffect, useRef, useState } from "react"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in"

interface UseScrollAnimationProps {
  type?: AnimationType
  threshold?: number
  delay?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollAnimation({
  type = "fade-up",
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
  once = false,
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Skip if we're not in a browser environment
    if (typeof window === "undefined") {
      return
    }

    const currentRef = ref.current
    if (!currentRef) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If element is intersecting (visible in viewport)
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (delay) {
            setTimeout(() => {
              setIsVisible(true)
              if (once) setHasAnimated(true)
            }, delay)
          } else {
            setIsVisible(true)
            if (once) setHasAnimated(true)
          }
        } else {
          // If element is not intersecting and we want repeated animations
          if (!once) {
            setIsVisible(false)
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [threshold, rootMargin, delay, once])

  // If we've already animated and only want to animate once, keep element visible
  if (once && hasAnimated) {
    return {
      ref,
      isVisible: true,
      animationClasses: "opacity-100 translate-y-0 translate-x-0 scale-100 transition-all duration-700 ease-out",
    }
  }

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out"
    const hiddenClasses = {
      "fade-up": "opacity-0 translate-y-10",
      "fade-down": "opacity-0 -translate-y-10",
      "fade-left": "opacity-0 translate-x-10",
      "fade-right": "opacity-0 -translate-x-10",
      "zoom-in": "opacity-0 scale-95",
    }

    return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : hiddenClasses[type]}`
  }

  return { ref, isVisible, animationClasses: getAnimationClasses() }
}
