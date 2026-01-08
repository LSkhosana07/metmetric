import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="logo-container mx-auto flex justify-between items-center py-6 px-6 md:rounded-b-4xl border-0 shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)]"
        style={{
          backdropFilter: "blur(25px)",
          background:
            "linear-gradient(131deg, rgba(0, 0, 0, 0.50) 12.76%, rgba(0, 0, 0, 0.15) 78.74%)",
        }}
      >
        {/* Logo */}
        <img className="w-36 md:w-48 z-50" src={Logo} alt="Metmetric Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex links">
          <Link to="/" className="text-white mx-4 hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/aboutUs" className="text-white mx-4 hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-white mx-4 hover:text-blue-400 transition-colors">
            Our Services
          </Link>
          <Link to="/projects" className="text-white mx-4 hover:text-blue-400 transition-colors">
            Featured Projects
          </Link>
          <Link to="/contact" className="text-white mx-4 hover:text-blue-400 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: "blur(25px)",
          background:
            "linear-gradient(131deg, rgba(0, 0, 0, 0.85) 12.76%, rgba(0, 0, 0, 0.70) 78.74%)",
        }}
      >
        <div className="flex flex-col items-start justify-start pt-24 px-8 space-y-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-blue-400 transition-colors w-full"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className="text-white text-lg hover:text-blue-400 transition-colors w-full"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-white text-lg hover:text-blue-400 transition-colors w-full"
            onClick={closeMenu}
          >
            Our Services
          </Link>
          <Link
            to="/projects"
            className="text-white text-lg hover:text-blue-400 transition-colors w-full"
            onClick={closeMenu}
          >
            Featured Projects
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-blue-400 transition-colors w-full"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          style={{ zIndex: -1 }}
        />
      )}
    </nav>
  );
}

export default Navbar;