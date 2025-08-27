'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import NeoPopButton from './ui/NeoPopButton'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-neopop-dark-500/95 backdrop-blur-sm border-b-2 border-neopop-green-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold font-inter tracking-wide">
              SOFTVERSE <span className="text-neopop-green-100">SYSTEMS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="flex items-baseline space-x-6 xl:space-x-8">
              <a 
                href="#" 
                className="text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 px-4 py-2 rounded-lg transition-all duration-200 font-inter text-sm uppercase tracking-wide hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop"
              >
                HOME
              </a>
              <div className="relative group">
                <button className="text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 px-4 py-2 rounded-lg transition-all duration-200 flex items-center font-inter text-sm uppercase tracking-wide hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop">
                  PRODUCTS <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 px-4 py-2 rounded-lg transition-all duration-200 flex items-center font-inter text-sm uppercase tracking-wide hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop">
                  MORE <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex space-x-2 xl:space-x-3 ml-6 xl:ml-8">
              <NeoPopButton variant="secondary" size="medium">
                LOGIN
              </NeoPopButton>
              <NeoPopButton variant="primary" size="medium">
                GET STARTED
              </NeoPopButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-neopop-dark-200 border-2 border-neopop-green-200 rounded-lg flex items-center justify-center text-white hover:bg-neopop-green-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t-2 border-neopop-dark-300">
          <div className="px-4 pt-4 pb-6 space-y-4 bg-neopop-dark-400">
            <a 
              href="#" 
              className="block px-4 py-3 text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 font-inter text-sm uppercase tracking-wide rounded-lg transition-all duration-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop"
            >
              HOME
            </a>
            <a 
              href="#" 
              className="block px-4 py-3 text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 font-inter text-sm uppercase tracking-wide rounded-lg transition-all duration-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop"
            >
              PRODUCTS
            </a>
            <a 
              href="#" 
              className="block px-4 py-3 text-white hover:text-black bg-transparent hover:bg-neopop-green-200 border-2 border-transparent hover:border-neopop-green-200 font-inter text-sm uppercase tracking-wide rounded-lg transition-all duration-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop"
            >
              MORE
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t border-neopop-dark-300">
              <NeoPopButton variant="secondary" size="small" fullWidth>
                LOGIN
              </NeoPopButton>
              <NeoPopButton variant="primary" size="small" fullWidth>
                GET STARTED
              </NeoPopButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
