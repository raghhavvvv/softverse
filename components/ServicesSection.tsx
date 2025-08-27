import { Rocket, Briefcase, Cloud, TrendingUp, Building, PieChart } from 'lucide-react'
import NeoPopCard from './ui/NeoPopCard'
import NeoPopButton from './ui/NeoPopButton'

const services = [
  {
    icon: Rocket,
    iconColor: "text-neopop-green-100",
    bgColor: "bg-neopop-green-100/10",
    title: "STARTUPS & FOUNDERS",
    description: "We support startups at every stage—from MVP to launch—by building lean, scalable, and user-focused products. No need to manage tech teams or hunt for tools. We handle it all.",
    variant: "primary" as const
  },
  {
    icon: Briefcase,
    iconColor: "text-neopop-accent-green",
    bgColor: "bg-neopop-accent-green/10",
    title: "NON-TECH ENTREPRENEURS", 
    description: "We turn your vision into reality—even if you don't have a tech background. Our team handles everything from idea validation to product delivery.",
    variant: "primary" as const
  },
  {
    icon: Cloud,
    iconColor: "text-neopop-accent-lime",
    bgColor: "bg-neopop-accent-lime/10",
    title: "CLOUD-NATIVE TEAMS",
    description: "We help cloud-based teams with infrastructure setup, cloud migration, and modern development pipelines, using tools like IaC and containerization.",
    variant: "primary" as const
  },
  {
    icon: TrendingUp,
    iconColor: "text-neopop-green-200",
    bgColor: "bg-neopop-green-200/10",
    title: "GROWING BUSINESSES",
    description: "For small to mid-sized businesses, we create solutions that automate workflows, improve efficiency, and support growth through smart software systems.",
    variant: "primary" as const
  },
  {
    icon: Building,
    iconColor: "text-neopop-accent-emerald",
    bgColor: "bg-neopop-accent-emerald/10",
    title: "ENTERPRISES & CORPORATES",
    description: "We work with large organizations to modernize legacy systems, build custom internal tools, and scale data infrastructure across teams.",
    variant: "primary" as const
  },
  {
    icon: PieChart,
    iconColor: "text-neopop-accent-mint",
    bgColor: "bg-neopop-accent-mint/10",
    title: "DATA-DRIVEN COMPANIES",
    description: "Whether you're building ML pipelines or managing data lakes, we assist in extracting insights, building dashboards, and setting up intelligent data systems.",
    variant: "primary" as const
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neopop-dark-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-gilroy tracking-tight">
            <span className="block text-white mb-2 font-gilroy">SOLUTIONS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green font-gilroy">
              FOR EVERYONE
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <NeoPopCard 
              key={index} 
              variant={service.variant}
              className="group cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white font-gilroy tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <NeoPopButton 
                    variant="primary"
                    size="small"
                    className="w-full"
                  >
                    LEARN MORE
                  </NeoPopButton>
                </div>
              </div>
            </NeoPopCard>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center">
          <NeoPopCard variant="primary" className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-gilroy text-white">
              READY TO TRANSFORM YOUR BUSINESS?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Let&apos;s discuss how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeoPopButton variant="primary" size="large">
                START YOUR PROJECT
              </NeoPopButton>
              <NeoPopButton variant="secondary" size="large">
                SCHEDULE CONSULTATION
              </NeoPopButton>
            </div>
          </NeoPopCard>
        </div>
      </div>
    </section>
  )
}
