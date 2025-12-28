import { ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../utils/ImageWithFallback";
import bg from '../assets/bg.jpeg';
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative h-[600px] flex items-center bg-gradient-to-br from-emerald-50 to-slate-50 opacity-100">
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-emerald-50/80 z-10" />
      <ImageWithFallback
        src={bg}
        alt="Oil refinery at sunset"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6 text-slate-900">
            Building the Future of Fueling Stations
          </h1>
          <p className="text-xl mb-8 text-slate-700">
            Pioneering biofuel stations, EV charging networks, and next-generation 
            fuel infrastructure solutions for a cleaner energy future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('/services')} className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              Explore Services
              <ChevronRight size={20} />
            </button>
            <button onClick={() => navigate('/contact')} className="bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}