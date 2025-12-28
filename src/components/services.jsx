import { Droplet, PlugZap, Fuel, PencilRuler, Wrench, Construction, Wind, CheckCircle } from "lucide-react";
import { CTASection } from "../utils/CTAsection";
const services = [
  {
    icon: Droplet,
    title: "Biofuel Station Development",
    description: "Comprehensive design and construction of biofuel stations, including Bio Diesel, Bio Gasoline, and Bio CBG/CNG facilities, ensuring compliance with environmental and safety standards.",
    features: [
      "Complete site planning and design",
      "Environmental compliance certification",
      "Storage tank installation",
      "Safety systems integration",
      "Bio fuel dispensing systems"
    ]
  },
  {
    icon: PlugZap,
    title: "Electric Vehicle Charging Infrastructure",
    description: "Turnkey installation of fast and ultra-fast EV charging points, integrated with renewable energy systems for efficient and sustainable charging solutions.",
    features: [
      "Fast & ultra-fast charging stations",
      "Renewable energy integration",
      "Smart payment systems",
      "Remote monitoring solutions",
      "Maintenance & support"
    ]
  },
  {
    icon: Fuel,
    title: "Engine Oil & Lubricant Supply Systems",
    description: "Specialized setup and integration of engine oil dispensing systems for commercial and retail fueling stations, with advanced storage and monitoring options.",
    features: [
      "Automated dispensing systems",
      "Storage tank solutions",
      "Inventory management",
      "Quality control systems",
      "Multi-grade lubricant options"
    ]
  },
  {
    icon: PencilRuler,
    title: "Site Planning & Design",
    description: "End-to-end site analysis, architectural design, and permit facilitation for all types of modern fueling and EV charging stations.",
    features: [
      "Comprehensive site analysis",
      "3D architectural visualization",
      "Regulatory approvals",
      "Traffic flow optimization",
      "Cost estimation"
    ]
  },
  {
    icon: Wrench,
    title: "System Installation & Maintenance",
    description: "Certified installation and servicing of underground storage tanks (USTs), biofuel pipelines, and advanced fuel/EV management systems to ensure reliable, long-term operation.",
    features: [
      "UST installation & testing",
      "Pipeline construction",
      "Preventive maintenance",
      "24/7 emergency support",
      "System upgrades"
    ]
  },
  {
    icon: Construction,
    title: "Fuel Station Construction",
    description: "From ground-up construction to commissioning, we deliver complete biofuel and multi-energy fuel stations with convenience stores and forecourt amenities.",
    features: [
      "Complete turnkey construction",
      "Convenience store development",
      "Forecourt amenities",
      "Canopy & lighting installation",
      "Project commissioning"
    ]
  },
  {
    icon: Wind,
    title: "CBG/CNG Services",
    description: "Complete compressed biogas and compressed natural gas solutions, from production and purification to distribution infrastructure for clean, renewable fuel alternatives.",
    features: [
      "CBG/CNG production setup",
      "Gas purification systems",
      "Compression stations",
      "Distribution infrastructure",
      "Safety & monitoring"
    ]
  }
];

export default function ServicesPage() {
  return (
    <section id="services-page" className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete turnkey solutions for biofuel stations, EV charging infrastructure, 
            and modern fuel facilities with cutting-edge technology and expert engineering.
          </p>
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Icon & Title Section */}
                <div className="lg:col-span-1 bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 flex flex-col justify-center items-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={40} />
                  </div>
                  <h3 className="text-2xl text-center">{service.title}</h3>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
      <div className="mt-25">

      <CTASection/>
      </div>
    </section>
  );
}
