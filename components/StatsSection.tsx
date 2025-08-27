import NeoPopCard from './ui/NeoPopCard'

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neopop-dark-500/50">
      <div className="max-w-7xl mx-auto">
        {/* Stats section with NeoPop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-on-scroll">
          <NeoPopCard variant="primary" hoverable={false} className="animate-scale-in animate-delay-100">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-neopop-green-100 animate-pulse-glow">50+</div>
              <div className="text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
          </NeoPopCard>
          <NeoPopCard variant="primary" hoverable={false} className="animate-scale-in animate-delay-200">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-neopop-accent-lime animate-pulse-glow">24/7</div>
              <div className="text-sm uppercase tracking-wide">Support Available</div>
            </div>
          </NeoPopCard>
          <NeoPopCard variant="primary" hoverable={false} className="animate-scale-in animate-delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-neopop-accent-green animate-pulse-glow">99.9%</div>
              <div className="text-sm uppercase tracking-wide">Uptime Guarantee</div>
            </div>
          </NeoPopCard>
        </div>
      </div>
    </section>
  )
}
