import { Code2, Cloud, Shield, Database, Users, Monitor } from 'lucide-react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

const coreServices = [
  {
    icon: Code2,
    iconColor: "text-neopop-green-100",
    title: "Software Development",
    description: "Building robust and scalable custom software, web, and mobile applications from concept to deployment.",
    features: [
      "Custom Web & Mobile Apps",
      "Enterprise Software", 
      "MVP Development"
    ]
  },
  {
    icon: Cloud,
    iconColor: "text-neopop-green-200",
    title: "Cloud & Infrastructure", 
    description: "Designing and managing secure, resilient cloud solutions for optimal performance and efficiency.",
    features: [
      "Cloud Migration & Optimization",
      "Infrastructure as Code (IaC)",
      "DevOps Automation"
    ]
  },
  {
    icon: Shield,
    iconColor: "text-neopop-green-300",
    title: "Security & Compliance",
    description: "Ensuring your digital assets are protected with state-of-the-art cybersecurity measures and compliance strategies.",
    features: [
      "Cybersecurity Audits",
      "Secure Application Development",
      "Compliance Consulting"
    ]
  },
  {
    icon: Database,
    iconColor: "text-neopop-accent-green",
    title: "Data & Intelligence",
    description: "Unlocking insights from your data with advanced analytics, AI, and robust data warehousing solutions.",
    features: [
      "ETL/ELT Pipelines",
      "AI & Machine Learning",
      "Data Warehousing & Lakes"
    ]
  },
  {
    icon: Users,
    iconColor: "text-neopop-green-100",
    title: "Agile IT Staffing",
    description: "Providing expert talent to augment your teams or build dedicated development units.",
    features: [
      "Dedicated Dev Teams",
      "Tech Stack Staffing",
      "Rapid Hiring Pipelines"
    ]
  },
  {
    icon: Monitor,
    iconColor: "text-neopop-green-200",
    title: "Product & User Experience",
    description: "Crafting intuitive and engaging user interfaces for an exceptional digital experience.",
    features: [
      "UI/UX Design & Prototyping",
      "QA & Test Automation",
      "User Research"
    ]
  }
]

export default function CoreServicesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neopop-dark-500/50">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimationWrapper animation="fadeIn" delay={0}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-inter tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neopop-green-100 to-neopop-accent-green">
              Our Core Services
            </h2>
          </div>
        </ScrollAnimationWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coreServices.map((service, index) => (
            <ScrollAnimationWrapper key={index} animation="slideUp" delay={index * 100}>
              <div className="bg-neopop-dark-200 border-2 border-neopop-green-200 p-6 sm:p-8 rounded-xl hover:transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neopop transition-all duration-200 card-tilt glassmorphism-green">
                <div className="flex flex-col">
                  <div className="mb-4 sm:mb-6">
                    <service.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconColor} icon-bounce`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white font-inter tracking-wide uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-neopop-green-200 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
