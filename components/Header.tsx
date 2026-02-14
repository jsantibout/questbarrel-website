"use client";

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/#features', label: 'Features'},
    { href: '/#how-it-works', label: 'How It Works'},
    { href: '/#phrases', label: 'Commands'},
    { href: '/#contact', label: 'Contact Us'}
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background-alt backdrop-blur-sm border-b-2 border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              onClick={() => window.scrollTo(0, 0)}
              className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded transition-opacity hover:opacity-80"
              aria-label="Go to home page"
            >
              <Image 
                src="/images/Quest_Barrel_logo.png" 
                alt="Nimbus Quill Logo" 
                className="h-20 w-20 rounded-full"
                width={80}
                height={80}
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-montserrat font-semibold uppercase tracking-wide hover:text-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-6 space-y-6 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-montserrat font-semibold uppercase tracking-wider hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;