'use client'

import { useEffect, useRef, useState } from 'react'

interface VantaBackgroundProps {
  children: React.ReactNode
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      return window.innerWidth < 768
    }

    setIsMobile(checkIfMobile())

    const handleResize = () => {
      setIsMobile(checkIfMobile())
    }

    window.addEventListener('resize', handleResize)

    const loadVanta = async () => {
      if (vantaRef.current && !vantaEffect.current) {
        try {
          const THREE = await import('three')
          const NET = await import('vanta/dist/vanta.net.min')
          
          // Mobile-optimized settings
          const mobileSettings = {
            points: 6,
            maxDistance: 15,
            spacing: 20,
            showDots: false
          }

          // Desktop settings
          const desktopSettings = {
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: false
          }

          const settings = checkIfMobile() ? mobileSettings : desktopSettings
          
          vantaEffect.current = (NET as any).default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: !checkIfMobile(),
            touchControls: checkIfMobile(),
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0f0f23,
            color: 0x16a34a,
            ...settings
          })
        } catch (error) {
          console.error('Failed to load Vanta.js:', error)
        }
      }
    }

    loadVanta()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={vantaRef} 
      className="relative w-full h-full"
    >
      {children}
    </div>
  )
}
