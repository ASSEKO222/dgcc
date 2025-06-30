import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Missions', path: '/missions' },
    { name: 'Actualités', path: '/news' },
    { name: 'Services aux consommateurs', path: '/services' },
    { name: 'Déposer une plainte', path: '/complaint' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar with language selector */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>🇫🇷 FR</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <button className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                    <span>🇫🇷 FR</span>
                  </button>
                  <button className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                    <span>🇬🇧 EN</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center ">
              <img
                src="/src/layouts/téléchargement.jpeg"
                alt="Équipe DGCC"
                className="rounded-full w-32 h-auto shadow-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`transition-colors duration-200 font-medium ${
                        isActive(item.path)
                          ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <nav className="px-4 py-4">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className={`block transition-colors duration-200 font-medium py-2 ${
                          isActive(item.path)
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;