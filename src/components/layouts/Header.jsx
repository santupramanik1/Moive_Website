import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* -- Logo -- */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-indigo-600">
              🎬 MovieBox
            </span>
          </div>

          {/* -- Desktop Menu - */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              About
            </NavLink>
            <NavLink
              to="movie"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Movie
            </NavLink>
            <NavLink
              to="contact"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              Contact
            </NavLink>
          </div>

          {/*-- Mobile Button - */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu  */}
      <div
        id="mobile-menu"
        className="md:hidden hidden px-4 pb-4 bg-white shadow"
      >
        <NavLink to="#" className="block py-2 text-gray-700 hover:text-indigo-600">
          Home
        </NavLink>
        <NavLink to="#" className="block py-2 text-gray-700 hover:text-indigo-600">
          About
        </NavLink>
        <NavLink to="#" className="block py-2 text-gray-700 hover:text-indigo-600">
          Movie
        </NavLink>
        <NavLink to="#" className="block py-2 text-gray-700 hover:text-indigo-600">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
