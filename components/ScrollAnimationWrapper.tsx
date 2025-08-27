'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp'
  delay?: number
  duration?: number
}

export default function ScrollAnimationWrapper({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0,
  duration = 600
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = `transition-all ease-out`
    const durationClass = `duration-${duration}`
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClass} ${durationClass} opacity-0`
        case 'slideUp':
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`
        case 'slideLeft':
          return `${baseClass} ${durationClass} opacity-0 translate-x-8`
        case 'slideRight':
          return `${baseClass} ${durationClass} opacity-0 -translate-x-8`
        case 'scaleUp':
          return `${baseClass} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClass} ${durationClass} opacity-0`
      }
    }
    
    return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
