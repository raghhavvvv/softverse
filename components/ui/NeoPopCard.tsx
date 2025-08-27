import React from 'react'

interface NeoPopCardProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export default function NeoPopCard({ children, className = '', variant = 'primary', onClick, hoverable, ...props }: NeoPopCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-secondary-600 border-secondary-500 shadow-neopop'
      case 'accent':
        return 'bg-accent-600 border-accent-500 shadow-neopop'
      default:
        return 'bg-primary-600 border-primary-500 shadow-neopop'
    }
  }

  const hoverStyles = hoverable 
    ? 'hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neopop-hover'
    : ''

  const activeStyles = onClick 
    ? 'active:transform active:translate-x-1 active:translate-y-1 active:shadow-neopop-pressed'
    : ''

  return (
    <div
      className={`
        border-2 rounded-lg p-6
        ${getVariantStyles()}
        ${hoverStyles}
        ${activeStyles}
        card-tilt glassmorphism-green
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
