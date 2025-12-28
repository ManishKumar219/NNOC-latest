import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full -translate-y-32"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full translate-y-48"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-white rounded-full translate-x-36"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Let's build a state-of-the-art fueling station that drives your business forward. 
            Contact us today for a free consultation.
          </p>
          <button onClick={() => navigate('/contact')} className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-lg transition-colors inline-flex items-center gap-3 shadow-lg hover:shadow-xl group">
            <span className="text-lg">Request a Consultation</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
