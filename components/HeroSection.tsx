import NeoPopButton from './ui/NeoPopButton'
import NeoPopCard from './ui/NeoPopCard'
import VantaBackground from './VantaBackground'
import ParallaxSection from './ParallaxSection'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'
import TypewriterText from './TypewriterText'

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta.js Background */}
      <div className="absolute inset-0 z-0">
        <VantaBackground>
          <div className="w-full h-full" />
        </VantaBackground>
      </div>
      
      {/* Dark overlay for better text readability - stronger on mobile */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/30 md:bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10 md:bg-transparent z-10"></div>

      <ParallaxSection speed={0.3} className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center">
          <ScrollAnimationWrapper animation="fadeIn" delay={0}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-inter tracking-tight">
              <span className="block text-white mb-2 font-inter">CRAFTING</span>
              <TypewriterText 
                texts={[
                  "VISIONARY",
                  "INNOVATIVE", 
                  "CUTTING-EDGE",
                  "TRANSFORMATIVE"
                ]}
                speed={150}
                deleteSpeed={100}
                pauseTime={2000}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green mb-2"
              />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neopop-accent-green to-neopop-green-200 mb-2">DIGITAL SOLUTIONS</span>
              <span className="block text-white text-lg sm:text-2xl md:text-3xl">FOR A CONNECTED FUTURE</span>
            </h1>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="slideUp" delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              We create innovative digital experiences that transform businesses and connect communities. 
              From cutting-edge software development to scalable cloud infrastructure, we&apos;re building 
              tomorrow&apos;s technology today.
            </p>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animation="scaleUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <NeoPopButton variant="primary" size="large">
                Get Started
              </NeoPopButton>
              <NeoPopButton variant="secondary" size="large">
                Learn More
              </NeoPopButton>
            </div>
          </ScrollAnimationWrapper>

        </div>
      </ParallaxSection>
    </section>
  )
}
