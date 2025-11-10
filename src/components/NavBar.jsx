import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ isLoggedIn, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const linkBase =
    'relative px-3 py-1 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full';

    const scrollToSection = (id) => {

      if (id === "home") {
        // Scroll to the very top, including navbar itself
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false);
        return;
    }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // close mobile menu after click
      }
    };

  return (
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center backdrop-blur-md transition-colors duration-500 shadow-lg ${
          darkMode
            ? 'bg-gray-900/80 text-white shadow-[0_0_15px_rgba(150,100,255,0.4)]'
            : 'bg-white/80 text-gray-900 shadow-[0_0_12px_rgba(150,100,255,0.2)]'
        }`}
      >

      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Home / Logo — scrolls to top */}
        <span
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          MOODay
        </span>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col md:flex-row md:flex items-center gap-6 font-medium ${
          menuOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {/* Logged Out Links */}
        <span
          onClick={() => scrollToSection("home")}
          className={`${linkBase} cursor-pointer`}
        >
          Home
        </span>
        <span
          onClick={() => scrollToSection("features")}
          className={`${linkBase} cursor-pointer`}
        >
          Features
        </span>
        <span
          onClick={() => scrollToSection("about")}
          className={`${linkBase} cursor-pointer`}
        >
          About
        </span>
        <Link to="/signin" className={linkBase}>Sign In</Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`mt-2 md:mt-0 px-3 py-1 rounded border transition ${
            darkMode
              ? 'border-gray-300 hover:bg-gray-800'
              : 'border-gray-400 hover:bg-gray-100'
          }`}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;