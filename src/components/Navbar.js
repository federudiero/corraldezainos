import React, { useState } from 'react';
import img from '../img/logo.jpg';
import { Menu, Close } from '@mui/icons-material'; // Importamos los íconos de Material UI para el menú

const Navbar = ({ onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('welcome'); // Estado para manejar la sección activa

  const handleSectionChange = (section) => {
    onSectionChange(section);
    setActiveSection(section); // Cambiar la sección activa
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false); // Cerrar el menú móvil al seleccionar una sección
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src={img} alt="Logo" className="h-[45px] w-[45px] rounded-full" />

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <button
              onClick={() => handleSectionChange('welcome')}
              className={`${
                activeSection === 'welcome' ? 'text-[rgb(197,149,106,88%)]' : 'hover:text-[rgb(197,149,106,88%)]'
              } transition`}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange('gallery')}
              className={`${
                activeSection === 'gallery' ? 'text-[rgb(197,149,106,88%)]' : 'hover:text-[rgb(197,149,106,88%)]'
              } transition`}
            >
              Galería
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange('contact')}
              className={`${
                activeSection === 'contact' ? 'text-[rgb(197,149,106,88%)]' : 'hover:text-[rgb(197,149,106,88%)]'
              } transition`}
            >
              Contacto
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange('ReservationInfo')}
              className={`${
                activeSection === 'ReservationInfo' ? 'text-[rgb(197,149,106,88%)]' : 'hover:text-[rgb(197,149,106,88%)]'
              } transition`}
            >
              Reservas
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange('Activities')}
              className={`${
                activeSection === 'Activities' ? 'text-[rgb(197,149,106,88%)]' : 'hover:text-[rgb(197,149,106,88%)]'
              } transition`}
            >
              Activities
            </button>
          </li>
        </ul>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#3C3C3C] p-4 space-y-4">
          <button
            onClick={() => handleSectionChange('welcome')}
            className={`block w-full text-left ${
              activeSection === 'welcome' ? 'text-[rgb(197,149,106,88%)]' : 'text-white'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => handleSectionChange('gallery')}
            className={`block w-full text-left ${
              activeSection === 'gallery' ? 'text-[rgb(197,149,106,88%)]' : 'text-white'
            }`}
          >
            Galería
          </button>
          <button
            onClick={() => handleSectionChange('contact')}
            className={`block w-full text-left ${
              activeSection === 'contact' ? 'text-[rgb(197,149,106,88%)]' : 'text-white'
            }`}
          >
            Contacto
          </button>
          <button
            onClick={() => handleSectionChange('ReservationInfo')}
            className={`block w-full text-left ${
              activeSection === 'ReservationInfo' ? 'text-[rgb(197,149,106,88%)]' : 'text-white'
            }`}
          >
            Reservas
          </button>
          <button
            onClick={() => handleSectionChange('Activities')}
            className={`block w-full text-left ${
              activeSection === 'Activities' ? 'text-[rgb(197,149,106,88%)]' : 'text-white'
            }`}
          >
            que hacer?
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
