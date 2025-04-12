// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-teal-50 shadow-md fixed w-full top-0 z-10">
      <nav className="container mx-auto px-10 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-teal-600 font-bold text-xl">Promising Abilities</div>
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} className="text-teal-600" />
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-teal-700 hover:text-teal-900 font-medium">Home</Link>
          <Link to="/content" className="text-teal-700 hover:text-teal-900 font-medium">Content</Link>
          <Link to="/opportunities" className="text-teal-700 hover:text-teal-900 font-medium">Opportunities</Link>
          <Link to="/support" className="text-teal-700 hover:text-teal-900 font-medium">Support</Link>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-teal-50 shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="text-teal-700 hover:text-teal-900 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/content" className="text-teal-700 hover:text-teal-900 font-medium" onClick={() => setIsMenuOpen(false)}>Content</Link>
              <Link to="/opportunities" className="text-teal-700 hover:text-teal-900 font-medium" onClick={() => setIsMenuOpen(false)}>Opportunities</Link>
              <Link to="/support" className="text-teal-700 hover:text-teal-900 font-medium" onClick={() => setIsMenuOpen(false)}>Support</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;