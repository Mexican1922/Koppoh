import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "/Images/Logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 font-inter">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoSrc} alt="Koppoh Logo" className="h-8 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-gray-700">
            <a href="#about" className="hover:text-primary-dark transition cursor-pointer font-medium">About us</a>
            <a href="#solutions" className="hover:text-primary-dark transition cursor-pointer font-medium">Our Solutions</a>
            <a href="#invest" className="hover:text-primary-dark transition cursor-pointer font-medium">Invest</a>
            <a href="#blog" className="hover:text-primary-dark transition cursor-pointer font-medium">Blog</a>
            <a href="#login" className="hover:text-primary-dark font-semibold transition cursor-pointer">Login</a>
            <button className="bg-white text-primary-blue border-2 border-primary-blue px-6 py-2 rounded-xl hover:border-primary-dark font-semibold hover:text-primary-dark transition shadow-md hover:shadow-lg transform hover:-translate-y-px cursor-pointer">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-blue hover:text-primary-dark p-2 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer + Backdrop */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-white z-5 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 z-1000 h-screen w-11/12 max-w-xs sm:w-4/5 sm:max-w-sm md:hidden transform bg-primary-blue transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="h-full bg-primary-blue text-white flex flex-col p-6">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={28} />
          </button>

          <div className="mt-6 pt-6">
            <nav className="flex flex-col gap-6">
              <a href="#about" onClick={handleLinkClick} className="font-medium text-white border-b border-white/20 pb-4">About us</a>
              <a href="#solutions" onClick={handleLinkClick} className="font-medium text-white border-b border-white/20 pb-4">Our solutions</a>
              <a href="#invest" onClick={handleLinkClick} className="font-medium text-white border-b border-white/20 pb-4">Invest</a>
              <a href="#blog" onClick={handleLinkClick} className="font-medium text-white border-b border-white/20 pb-4">Blog</a>
              <a href="#login" onClick={handleLinkClick} className="font-semibold text-white pb-2">Login</a>
            </nav>

            <div className="mt-6">
              <button
                onClick={handleLinkClick}
                className="w-full bg-white text-primary-blue px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-px hover:bg-gray-100 cursor-poi"
              >
                Apply now
              </button>
            </div>
          </div>

          {/* Footer*/}
          <div className="mt-auto pt-4 text-center text-sm text-white/80">
            <span>koppoh.ng</span>
          </div>
        </div>
      </aside>
    </header>
  );
}