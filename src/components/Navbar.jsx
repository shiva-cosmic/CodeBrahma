import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c14]/80 backdrop-blur-xl border-b border-[#2a2a3a]"
          : "bg-[#0c0c14]/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* Logo Section Changed */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/logo.png"
              alt="Brahma logo"
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg shadow-md"
            />
            <span className="text-xl md:text-2xl font-semibold tracking-wide">
              <span className="text-white">Code</span>
              <span className="text-purple-400">Brahma</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base font-medium"
            >
              Testimonials
            </a>

            
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-[#0c0c14]/95 backdrop-blur-xl border-t border-[#2a2a3a] animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 space-y-5">
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-base font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-base font-medium"
            >
              Testimonials
            </a>

           
          </div>
        </div>
      )}
    </nav>
  );
}
