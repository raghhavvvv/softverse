import React from 'react'

interface NeoPopInputProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'email' | 'password'
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
}

export default function NeoPopInput({
  placeholder,
  value,
  onChange,
  type = 'text',
  variant = 'primary',
  fullWidth = false,
  className = ''
}: NeoPopInputProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-neopop-dark-200 border-neopop-blue-200 focus:border-neopop-blue-100 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]'
      default:
        return 'bg-neopop-dark-200 border-neopop-orange-200 focus:border-neopop-orange-100 focus:shadow-[0_0_0_3px_rgba(249,115,22,0.1)]'
    }
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        px-4 py-3 border-2 rounded-lg
        text-white placeholder-gray-400
        shadow-neopop
        transition-all duration-200
        focus:outline-none focus:transform focus:-translate-x-1 focus:-translate-y-1 focus:shadow-neopop-hover
        ${getVariantStyles()}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    />
  )
}
