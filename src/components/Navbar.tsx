
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl md:text-2xl text-lightblue-900">
            WebОфис
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-lightblue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-lightblue-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#advantages"
                className="text-gray-700 hover:text-lightblue-600 transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-lightblue-600 transition-colors"
              >
                Контакты
              </a>
              <Button className="bg-lightblue-500 hover:bg-lightblue-600">
                Связаться с нами
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-lightblue-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-lightblue-600"
              onClick={toggleMenu}
            >
              Услуги
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-lightblue-600"
              onClick={toggleMenu}
            >
              О компании
            </a>
            <a
              href="#advantages"
              className="block px-3 py-2 text-gray-700 hover:text-lightblue-600"
              onClick={toggleMenu}
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-lightblue-600"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-lightblue-500 hover:bg-lightblue-600">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
