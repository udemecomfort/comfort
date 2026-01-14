import { useState } from "react";
import { NavLink } from "react-router";
import { FaBriefcase } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Comfort<span className="text-[#07aa99]">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300 ${
                    isActive
                      ? "text-[#07aa99]"
                      : "hover:text-[#07aa99]"
                  }`
                }
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#07aa99] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#07aa99] px-6 py-2 rounded-xl text-black font-semibold hover:scale-105 transition">
          View Resume <FaBriefcase />
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 bg-black">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-medium transition ${
                  isActive ? "text-[#07aa99]" : "hover:text-[#07aa99]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="mt-4 flex items-center justify-center gap-2 bg-[#07aa99] py-3 rounded-lg text-black font-semibold">
            View Resume <FaBriefcase />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
