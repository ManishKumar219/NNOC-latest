import { Droplet, PlugZap, Fuel, PencilRuler, Wrench, Construction, Wind } from "lucide-react";

const services = [
  {
    icon: Droplet,
    emoji: "🌱",
    title: "Biofuel Station Development",
    description: "Comprehensive design and construction of biofuel stations, including Bio Diesel, Bio Gasoline, and Bio CBG/CNG facilities, ensuring compliance with environmental and safety standards."
  },
  {
    icon: PlugZap,
    emoji: "⚡",
    title: "Electric Vehicle Charging Infrastructure",
    description: "Turnkey installation of fast and ultra-fast EV charging points, integrated with renewable energy systems for efficient and sustainable charging solutions."
  },
  {
    icon: Fuel,
    emoji: "🛢️",
    title: "Engine Oil & Lubricant Supply Systems",
    description: "Specialized setup and integration of engine oil dispensing systems for commercial and retail fueling stations, with advanced storage and monitoring options."
  },
  {
    icon: PencilRuler,
    emoji: "🏗️",
    title: "Site Planning & Design",
    description: "End-to-end site analysis, architectural design, and permit facilitation for all types of modern fueling and EV charging stations."
  },
  {
    icon: Wrench,
    emoji: "🔧",
    title: "System Installation & Maintenance",
    description: "Certified installation and servicing of underground storage tanks (USTs), biofuel pipelines, and advanced fuel/EV management systems to ensure reliable, long-term operation."
  },
  {
    icon: Construction,
    emoji: "🚉",
    title: "Fuel Station Construction",
    description: "From ground-up construction to commissioning, we deliver complete biofuel and multi-energy fuel stations with convenience stores and forecourt amenities."
  },
  {
    icon: Wind,
    emoji: "💨",
    title: "CBG/CNG",
    description: "Complete compressed biogas and compressed natural gas solutions, from production and purification to distribution infrastructure for clean, renewable fuel alternatives."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[90vw] m-auto">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete turnkey solutions for biofuel stations, EV charging infrastructure, 
            and modern fuel facilities with cutting-edge technology and expert engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group hover:scale-104 transition-transform duration-700"
            >
              <div className="relative h-10 overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{service.emoji} {service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}