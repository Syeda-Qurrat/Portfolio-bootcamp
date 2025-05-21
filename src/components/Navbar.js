import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-black via-[#d21048] to-[#ff9db3] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-[#ffeeeb] bg-opacity-20 bg-black px-3 py-1 rounded-lg">
                  SQ
                </span>
              </div>
              <div className="md:block hidden ml-4">
                <span className="text-[#ffeeeb] font-semibold text-lg">
                  Syeda Qurrat
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#about"
                    className="text-[#ffeeeb] hover:text-black hover:bg-[#ff9db3] px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-[#ffeeeb] hover:text-black hover:bg-[#ff9db3] px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-[#ffeeeb] hover:text-black hover:bg-[#ff9db3] px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-[#ffeeeb] hover:text-black hover:bg-[#ff9db3] px-3 py-2 rounded-md text-sm font-medium transition"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-[#ffeeeb] hover:text-black transition"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuopen && (
          <div className="md:hidden bg-gradient-to-b from-[#ff9db3] to-[#ffeeeb] shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="text-black hover:text-[#d21048] block px-3 py-2 rounded-md transition"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-black hover:text-[#d21048] block px-3 py-2 rounded-md transition"
              >
                Skill
              </a>
              <a
                href="#projects"
                className="text-black hover:text-[#d21048] block px-3 py-2 rounded-md transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-black hover:text-[#d21048] block px-3 py-2 rounded-md transition"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
