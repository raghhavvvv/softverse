import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function SellersGalaxySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 lg:pl-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Product Image */}
          <div className="flex-1 lg:pr-8 animate-fade-in-left">
            <div className="rounded-2xl overflow-hidden">
              <Image 
                src="/sellersgalaxy.webp" 
                alt="Sellers Galaxy Interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-right">
            <p className="text-neopop-green-200 text-lg mb-4 font-bold font-inter uppercase tracking-wide">
              Our Flagship Product
            </p>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-inter tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green">
                Sellers
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neopop-accent-green to-neopop-green-200">
                Galaxy
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              One platform to manage all your e-commerce needs. Sellers Galaxy is a powerful, intuitive platform designed 
              for modern online sellers. Whether you&apos;re a growing team, established enterprise, or ambitious solo 
              entrepreneur, Sellers Galaxy lets you focus on selling more while we handle the complexity.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• Centralized Dashboard</h4>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• Powerful Analytics</h4>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• Automated Operations</h4>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• Seamless Integrations</h4>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• User-Friendly Interface</h4>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 font-inter tracking-wide">• Scalable Architecture</h4>
              </div>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 bg-neopop-green-200 hover:bg-neopop-accent-green text-black font-bold rounded-lg border-2 border-neopop-green-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 font-inter uppercase tracking-wide">
              Visit Sellers Galaxy
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
