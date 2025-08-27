import { Monitor, ExternalLink } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 lg:pl-20 animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Why Softverse Systems */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-inter tracking-wide">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green">Softverse</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neopop-accent-green to-neopop-green-200">Systems?</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                At Softverse Systems, innovation meets execution. We blend creative precision with proven expertise, 
                delivering clear, modern software solutions, free of unnecessary complexity. We&apos;re more than just 
                developers; we&apos;re strategic partners dedicated to your digital success.
              </p>
              
              <p>
                Our approach is rooted in understanding your unique challenges and opportunities. We don&apos;t just build code; 
                we build trust and long-term relationships, ensuring every solution is perfectly aligned with your business goals.
              </p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button className="bg-neopop-green-200 hover:bg-neopop-accent-green text-black font-bold py-3 px-6 rounded-lg border-2 border-neopop-green-200 hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 flex items-center gap-2 font-inter uppercase tracking-wide">
                Learn More <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="flex-1 flex flex-col items-center space-y-6 lg:pl-8 animate-on-scroll">
            {/* First Testimonial Card */}
            <div className="bg-neopop-dark-200 border-2 border-neopop-green-200 p-6 rounded-2xl w-full max-w-sm hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-neopop-green-200/20 border-2 border-neopop-green-200 rounded-lg flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-neopop-green-200" />
                </div>
              </div>
              
              <blockquote className="text-white text-lg font-bold text-center mb-4 font-inter">
                &ldquo;Thanks for visiting Softverse Systems. We&apos;re here to help you grow, every step of the way.&rdquo;
              </blockquote>
              
              <div className="text-center">
                <div className="text-white font-bold font-inter tracking-wide">Sellers Galaxy</div>
                <div className="text-neopop-green-200 text-sm font-inter uppercase tracking-wide">Interface Technology</div>
              </div>
            </div>

            {/* Second Testimonial Card */}
            <div className="bg-neopop-dark-200 border-2 border-neopop-green-300 p-6 rounded-2xl w-full max-w-sm hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-neopop-green-300/20 border-2 border-neopop-green-300 rounded-lg flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-neopop-green-300" />
                </div>
              </div>
              
              <blockquote className="text-white text-lg font-bold text-center mb-4 font-inter">
                &ldquo;Thanks for visiting Softverse Systems. We&apos;re here to help you grow, every step of the way.&rdquo;
              </blockquote>
              
              <div className="text-center">
                <div className="text-white font-bold font-inter tracking-wide">Brijesh Chandel, CEO</div>
                <div className="text-neopop-green-300 text-sm font-inter uppercase tracking-wide">Tech Innovations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
