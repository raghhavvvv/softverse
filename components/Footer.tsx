import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import NeoPopButton from './ui/NeoPopButton'

export default function Footer() {
  return (
    <footer className="bg-neopop-dark-500 border-t-4 border-neopop-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold font-inter tracking-wide">
                SOFTVERSE <span className="text-neopop-green-100">SYSTEMS</span>
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Crafting visionary digital solutions for a connected future. 
              We transform ideas into innovative digital experiences.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-neopop-dark-200 border-2 border-neopop-green-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-neopop-green-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 group"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-neopop-dark-200 border-2 border-neopop-green-300 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-neopop-green-300 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-neopop-dark-200 border-2 border-neopop-accent-green rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-neopop-accent-green hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-neopop-dark-200 border-2 border-neopop-accent-green rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-neopop-accent-green hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 group"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 font-inter tracking-wide text-lg">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Cloud Infrastructure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-6 font-inter tracking-wide text-lg">COMPANY</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neopop-green-100 transition-colors text-sm uppercase tracking-wide hover:transform hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <NeoPopButton variant="accent" size="small" fullWidth>
              GET IN TOUCH
            </NeoPopButton>
          </div>
        </div>

        <div className="border-t-2 border-neopop-dark-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-inter text-sm tracking-wide mb-4 md:mb-0">
              © 2024 SOFTVERSE SYSTEMS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-4">
              <NeoPopButton variant="primary" size="small">
                NEWSLETTER
              </NeoPopButton>
              <NeoPopButton variant="secondary" size="small">
                SUPPORT
              </NeoPopButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
