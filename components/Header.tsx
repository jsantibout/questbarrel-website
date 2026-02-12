"use client";

import Image from "next/image"
import Link from "next/link"

const navLinks = [
    { href: '/#features', label: 'Features'},
    { href: '/#how-it-works', label: 'How It Works'},
    { href: '/#phrases', label: 'Commands'}
]

const Header = () => {
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
        </div>
      </nav>
    </header>
  );
}

export default Header;