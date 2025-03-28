
import React from "react";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">WebОфис</h3>
            <p className="text-gray-400 mb-4">
              Разработка корпоративных IT-решений для среднего и крупного бизнеса.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lightblue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Web3 разработка</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Java разработка</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">PHP разработка</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Аутстаффинг</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Time & Material</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Кейсы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия использования</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} WebОфис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
