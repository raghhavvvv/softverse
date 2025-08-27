import React from 'react'

interface NeoPopButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
  disabled?: boolean
  fullWidth?: boolean
  className?: string
}

export default function NeoPopButton({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  fullWidth = false,
  className = ''
}: NeoPopButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-neopop-green-200 hover:bg-neopop-green-100 border-neopop-green-300 text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] active:shadow-[2px_2px_0px_#000000]'
      case 'secondary':
        return 'bg-neopop-black-200 hover:bg-neopop-black-100 border-neopop-black-300 text-neopop-green-100 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] active:shadow-[2px_2px_0px_#000000]'
      case 'accent':
        return 'bg-neopop-accent-green hover:bg-neopop-accent-lime border-neopop-green-300 text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] active:shadow-[2px_2px_0px_#000000]'
      default:
        return 'bg-neopop-green-200 hover:bg-neopop-green-100 border-neopop-green-300 text-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] active:shadow-[2px_2px_0px_#000000]'
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm h-10'
      case 'large':
        return 'px-8 py-4 text-lg h-14'
      default:
        return 'px-6 py-3 text-base h-12'
    }
  }

  return (
    <button
      className={`
        ${getSizeStyles()}
        ${getVariantStyles()}
        font-inter font-bold uppercase tracking-wide
        transition-all duration-200 ease-in-out
        transform active:translate-x-1 active:translate-y-1 active:shadow-none
        hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neopop-hover
        disabled:opacity-50 disabled:cursor-not-allowed
        btn-ripple
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
