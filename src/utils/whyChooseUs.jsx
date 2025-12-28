import { Shield, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description: "Our safety-first culture ensures every project adheres to the strictest industry and environmental regulations."
  },
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "We use only premium materials and skilled labor to guarantee a durable and high-quality finish."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Our proven project management process ensures your station is operational on schedule."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-5 bg-gradient-to-br from-emerald-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Your Trusted Partner in<br />
              <span className="text-emerald-600">Fuel Station Development</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With our expertise, New Natural Oil Corporation is the industry leader in building safe, 
              reliable, and profitable fueling stations. We merge cutting-edge technology with 
              time-tested construction practices.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-emerald-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                    <feature.icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-emerald-600 mb-2">5+</div>
              <div className="text-slate-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-emerald-600 mb-2">100%</div>
              <div className="text-slate-600">Safety Record</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-emerald-600 mb-2">7+</div>
              <div className="text-slate-600">Services Offered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}