import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 lg:p-7 fixed top-0 w-full z-50">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-start space-x-4">
          <img src="logo.png" alt="Logo" className="text-neutral-950 h-8 w-8" />
          <div className="lg:flex space-x-4 hidden">
            <button className="text-neutral-950 ">Inicio</button>
            <button className="text-neutral-950">Categorías</button>
            <button className="text-neutral-950">Promociones</button>
            <button className="text-neutral-950">Noticias</button>
            <button className="text-neutral-950">Soporte</button>
          </div>
        </div>

        <div className="flex items-end space-x-4 lg:space-x-8">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Buscar"
              className="border focus:ring-neutral-500 text-neutral-950 border-neutral-300 focus:border-neutral-700 rounded-lg py-1 px-2"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 h-4 w-4" />
            </button>
          </div>

          <a href='./items'><FontAwesomeIcon icon={faShoppingCart} className="text-neutral-950 h-6 w-6"/></a>

          <a href='#' className="text-neutral-950 hover:text-neutral-500 flex items-center">
            <FontAwesomeIcon icon={faUser} className="text-neutral-950 hover:text-neutral-700 h-6 w-6 mr-2"/>
            Iniciar Sesión
          </a>
        </div>
      </div>

      <div className="lg:hidden mt-4 flex justify-center space-x-4">
        <button className="text-neutral-950">Inicio</button>
        <button className="text-neutral-950">Categorías</button>
        <button className="text-neutral-950">Promociones</button>
        <button className="text-neutral-950">Noticias</button>
        <button className="text-neutral-950">Soporte</button>
      </div>
    </nav>
  );
};

export default Navbar;