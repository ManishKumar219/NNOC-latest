import { Mail, MapPin, Building2, FileText, Target, Eye, Heart, Users, MapPinned } from "lucide-react";
import { CTASection } from "../utils/CTAsection";

const teamMembers = [
  {
    name: "Nitish Kumar",
    role: "Director",
    email: "nk620045@gmail.com"
  },
  {
    name: "Randhir Mondal",
    role: "Director",
    email: "randhirs007@gmail.com"
  },
  {
    name: "Chandan Kumar",
    role: "State Head (Bihar & Jharkhand)",
    email: "chandan.prity1@gmail.com"
  },
  {
    name: "Ramjivan Kumar",
    role: "Sales Executive",
    email: "www.yramjivan198@gmail.com"
  },
  {
    name: "Mangal Yadav",
    role: "Sales Executive",
    email: "mangalydv7808@gmail.com"
  },
  {
    name: "Sandeep Dubey",
    role: "State Head (West Bengal)",
    email: "sandeep62150@gmail.com"
  }
];

const values = [
  { icon: Heart, title: "Safety First", description: "Prioritizing the well-being of our team and clients in every project" },
  { icon: Target, title: "Quality Excellence", description: "Delivering superior craftsmanship and attention to detail" },
  { icon: Building2, title: "Environmental Responsibility", description: "Committed to sustainable and eco-friendly construction practices" },
  { icon: Users, title: "Client Partnership", description: "Building lasting relationships through trust and collaboration" }
];

const networkStates = [
  "West Bengal",
  "Bihar",
  "Jharkhand",
  "Chhattisgarh",
  "Jammu & Kashmir"
];

export default function About() {
  return (
    <section id="about" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Company Details */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-center mb-12">About Us</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-3xl mb-6 text-emerald-600">Company Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-700">Company Name</p>
                  <p className="text-slate-600">NEW NATURAL OIL CORPORATION</p>
                  <p className="text-sm text-slate-500">(A UNIT OF RSN NATURAL OIL & PETROLEUM PVT.LTD.)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-700">Address</p>
                  <p className="text-slate-600">
                    HASANGANJ ENGLISH, P/S - KASIMBAJAR,<br />
                    P/O-SAFIYABAD, NEAR BY JANGLI ASTHAN,<br />
                    JAMALPUR, MUNGER (BIHAR)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-700">CIN NO</p>
                  <p className="text-slate-600 font-mono">U46102BR2025PTC074978</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="text-emerald-600 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-slate-700">GST NO</p>
                  <p className="text-slate-600 font-mono">10AAOCR5104R1Z4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-emerald-600" size={32} />
                <h3 className="text-3xl">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To deliver exceptional fuel station construction services that exceed client expectations while maintaining the highest standards of safety, quality, and environmental stewardship.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="text-emerald-600" size={32} />
                <h3 className="text-3xl">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and innovative fuel station construction company, setting industry standards for sustainable and technologically advanced fueling infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <value.icon className="text-emerald-600 mb-4" size={40} />
                <h4 className="text-xl mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl text-center mb-12">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-emerald-600">{member.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl mb-1">{member.name}</h4>
                <p className="text-emerald-600 mb-3">{member.role}</p>
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span className="truncate">{member.email}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Network */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPinned className="text-emerald-600" size={32} />
              <h3 className="text-3xl">Our Network</h3>
            </div>
            <p className="text-slate-600 mb-6">
              We are proudly expanding our business network across multiple states:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {networkStates.map((state, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection/>
    </section>
  );
}
