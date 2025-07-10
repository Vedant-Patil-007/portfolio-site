import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-header-bg/60 backdrop-blur-md shadow-lg' 
          : 'bg-header-bg/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-text-primary hover:text-link-color font-bold text-2xl tracking-tight transition-colors duration-200"
          >
            VP
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-link-color bg-search-hover/40 backdrop-blur-sm'
                    : 'text-text-secondary hover:text-link-color hover:bg-search-hover/30'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://github.com/vedantpatil2024"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-link-color/20 backdrop-blur-sm text-link-color hover:bg-link-color/30 transition-all duration-200"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary hover:text-link-color hover:bg-search-hover/30 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-link-color bg-search-hover/40 backdrop-blur-sm'
                    : 'text-text-secondary hover:text-link-color hover:bg-search-hover/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://github.com/vedantpatil2024"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded-lg text-sm font-medium bg-link-color/20 backdrop-blur-sm text-link-color hover:bg-link-color/30 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;