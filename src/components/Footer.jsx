import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-purple-900/20 border-t border-purple-800/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        
        {/* Main footer content */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-14">
          
          {/* Logo + Social */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Brahma Logo"
                className="w-7 h-7 sm:w-9 sm:h-9 drop-shadow-lg rounded-md"
              />
              <span className="text-xl sm:text-2xl font-extrabold tracking-wide">
                <span className="text-white">Code</span>
                <span className="text-purple-400">Brahma</span>
              </span>
            </div>

            <p className="text-gray-400/90 mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              Elevate your development workflow with AI-powered tools and smart automation built for modern teams.
            </p>

            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 bg-slate-800/70 rounded-xl hover:bg-purple-700/50 hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-purple-300 hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-purple-300 mb-4 text-sm sm:text-base tracking-wide">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-300 transition-all duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-purple-800/40">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Shivanshhh. All rights reserved.
            </p>

            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((txt) => (
                <a
                  key={txt}
                  href="#"
                  className="text-gray-400 hover:text-purple-300 transition-all duration-200"
                >
                  {txt}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
