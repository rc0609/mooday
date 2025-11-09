import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ isLoggedIn, darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const linkBase =
    'relative px-3 py-1 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-purple-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full';

  return (
    <nav
      className={`w-full px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md`}
    >
      {/* Top Row: Logo + Mobile Toggle */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MOODay
        </Link>
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
        {isLoggedIn ? (
          <>
            {/* Logged In Links */}
            <Link to="/" className={linkBase}>Home</Link>
            <Link to="/dashboard" className={linkBase}>Dashboard</Link>
            <Link to="/log" className={linkBase}>Mood Log</Link>
            <Link to="/calendar" className={linkBase}>Mood Calendar</Link>

            {/* Right-side Controls: Profile Only */}
            <div className="flex items-center gap-4 ml-auto relative">
              {/* Profile Picture */}
              <div>
                <img
                  src="https://ui-avatars.com/api/?name=Ramisha&background=purple&color=fff&size=40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-400 hover:border-purple-600 cursor-pointer transition"
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div
                    className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg z-50 ${
                      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  >
                    <ul className="py-2 text-sm">
                      <li className="px-4 py-2 hover:bg-purple-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        Profile
                      </li>
                      <li
                        onClick={toggleDarkMode}
                        className="px-4 py-2 hover:bg-purple-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 flex items-center justify-between"
                      >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                      </li>
                      <li className="px-4 py-2 hover:bg-purple-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                        Log Out
                      </li>
                    </ul>
                  </div>
                )}  
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Logged Out Links */}
            <Link to="/" className={linkBase}>Home</Link>
            <a href="#features" className={linkBase}>Features</a>
            <a href="#about" className={linkBase}>About</a>
            <Link to="/signin" className={linkBase}>Sign In</Link>

            {/* Dark Mode Toggle (Logged Out) */}
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
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;