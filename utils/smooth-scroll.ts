/**
 * Smoothly scrolls to a target element or position
 * @param target - Element ID or Y position to scroll to
 * @param duration - Duration of the scroll animation in ms
 * @param offset - Optional offset from the target position
 */
export function smoothScroll(target: string | number | HTMLElement, duration = 1000, offset = 0): void {
  // Return early if not in browser environment
  if (typeof window === "undefined") return

  let targetPosition: number

  // If target is a number, use it directly
  if (typeof target === "number") {
    targetPosition = target
  }
  // If target is an element, get its position
  else if (target instanceof HTMLElement) {
    targetPosition = target.getBoundingClientRect().top + window.scrollY
  }
  // If target is a string (element ID), find the element and get its position
  else {
    const targetElement = document.getElementById(target)
    if (!targetElement) return
    targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
  }

  // Apply offset
  targetPosition += offset

  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  // Animation function
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  // Start animation
  requestAnimationFrame(animation)
}
