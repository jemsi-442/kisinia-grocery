import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/shop' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="
      sticky top-0 z-50 backdrop-blur
      bg-[#FFF4E6]/90 dark:bg-[#1E1A17]/90
      border-b border-[#F1E0C6] dark:border-[#3A2F29]
      shadow-sm
    ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-[#D35400] dark:text-[#F39C12] hover:text-[#E67E22] transition"
        >
          Kisinia
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium 
                text-[#9A6C4A] dark:text-[#D5B895]
                hover:text-[#D35400] dark:hover:text-[#F39C12] transition-all
                ${isActive 
                  ? 'after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#D35400] dark:after:bg-[#F39C12]' 
                  : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#9A6C4A] dark:text-[#D5B895] hover:bg-[#FFEBD6] dark:hover:bg-[#2A2421] transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-xl text-[#9A6C4A] dark:text-[#D5B895]" />
            {cartCount > 0 && (
              <span className="
                absolute -top-2 -right-2 
                bg-[#F39C12] text-white
                text-xs font-bold rounded-full 
                h-5 w-5 flex items-center justify-center 
                animate-pulse
              ">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center space-x-3">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#9A6C4A] dark:text-[#D5B895] hover:bg-[#FFEBD6] dark:hover:bg-[#2A2421] transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-xl text-[#9A6C4A] dark:text-[#D5B895]" />
            {cartCount > 0 && (
              <span className="
                absolute -top-2 -right-2 
                bg-[#F39C12] text-white 
                text-xs font-bold rounded-full 
                h-5 w-5 flex items-center justify-center 
                animate-pulse
              ">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-[#9A6C4A] dark:text-[#D5B895] hover:bg-[#FFEBD6] dark:hover:bg-[#2A2421] transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={navLinks} 
      />
    </header>
  );
};

export default Header;
