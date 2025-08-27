'use client'

import { useEffect, useRef } from 'react'

interface VantaBackgroundProps {
  children: React.ReactNode
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    const loadVanta = async () => {
      if (vantaRef.current && !vantaEffect.current) {
        try {
          const THREE = await import('three')
          const NET = await import('vanta/dist/vanta.net.min')
          
          vantaEffect.current = (NET as any).default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0f0f23,
            color: 0x16a34a,
            points: 10,
            maxDistance: 20,
            spacing: 15,
            showDots: false
          })
        } catch (error) {
          console.error('Failed to load Vanta.js:', error)
        }
      }
    }

    loadVanta()

    return () => {
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
