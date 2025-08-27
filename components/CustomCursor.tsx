'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkIfMobile = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768
    }

    setIsMobile(checkIfMobile())

    // Listen for resize events to update mobile status
    const handleResize = () => {
      setIsMobile(checkIfMobile())
    }

    window.addEventListener('resize', handleResize)

    // Don't add mouse listeners on mobile devices
    if (checkIfMobile()) {
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add mouse move listener
    document.addEventListener('mousemove', updateCursorPosition)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('resize', handleResize)
      if (!checkIfMobile()) {
        document.removeEventListener('mousemove', updateCursorPosition)
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }
  }, [])

  // Don't render custom cursor on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x - 10}px`,
        top: `${position.y - 10}px`,
      }}
    />
  )
}
