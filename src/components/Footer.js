import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-black via-[#c40040] to-[#ff0055] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">
              Syeda Qurrat Ul Ain Hashmi
            </h3>
            <p className="text-white/80">
              Blending code, creativity, and continuous learning in tech
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-[#ffe4e7] transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-[#ffe4e7] transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-[#ffe4e7] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/Syeda-Qurrat"
                className="text-white/80 hover:text-[#ffe4e7] transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/syeda-qurrat-ul-ain-hashmi/"
                className="text-white/80 hover:text-[#ffe4e7] transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">
            © 2025 Syeda Qurrat Ul Ain Hashmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
