import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-neutral-900 text-2xl font-bold">Game Store</div>

        <div className="flex space-x-4">
          <a href="#" className="text-neutral-950 hover:text-neutral-500">Inicio</a>
          <a href="#" className="text-neutral-950 hover:text-neutral-500">Categorias</a>
          <a href="#" className="text-neutral-950 hover:text-neutral-500">Promociones</a>
          <a href="#" className="text-neutral-950 hover:text-neutral-500">Noticias</a>
          <a href="#" className="text-neutral-950 hover:text-neutral-500">Soporte</a>
        </div>

        <div className="w-1/5">
          <input type="text" placeholder="Buscar productos" className="w-full py-2 px-4 border bg-white focus:ring-neutral-500 text-neutral-950 border-neutral-300 focus:border-neutral-700 rounded-lg"/>
        </div>

        <div className="flex items-center space-x-4">
          <a href="./items" className="text-neutral-950 hover:text-neutral-500">
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6"/>
          </a>
          <a href="./login" className="text-neutral-950 hover:text-neutral-500 flex items-center">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 mr-2"/>
            Iniciar Sesión
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;