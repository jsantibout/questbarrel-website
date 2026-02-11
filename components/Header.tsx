"use clinet";

import Image from "next/image"
import Link from "next/link"

const navLinks = [
    { href: '/features', label: 'Features'},
    { href: '/howitworks', label: 'How It Works'},
    { href: '/commands', label: 'Commands'}
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
                src="Quest_Barrel_logo.png" 
                alt="Nimbus Quill Logo" 
                className="h-10 w-auto"
                width={40}
                height={40}
              />
            </Link>
              <span className="text-xl font-semibold text-primary font-heading">Nimbus Quill</span>
          </div>
              <div className="flex items-center gap-6">
              <a href="#features" className="text-muted hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted hover:text-primary transition-colors">How It Works</a>
              <a href="#phrases" className="text-muted hover:text-primary transition-colors">Commands</a>
              </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;