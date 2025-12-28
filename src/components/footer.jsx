import { MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4">New Natural Oil Corporation</h3>
            <p className="text-gray-400 mb-4">
              A unit of RSN NATURAL OIL & PETROLEUM PVT. LTD.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xl mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">
                  Hasanganj, Jamalpur, Bihar 811214
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <div className="text-gray-400">
                  <a 
                    href="mailto:newnaturaloilcorporation@gmail.com"
                    className="hover:text-emerald-400 transition-colors block"
                  >
                    newnaturaloilcorporation@gmail.com
                  </a>
                  <a 
                    href="mailto:rsnpetroleum@gmail.com"
                    className="hover:text-emerald-400 transition-colors block"
                  >
                    rsnpetroleum@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} New Natural Oil Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}