import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href='#' className="text-neutral-950 text-2xl font-bold">Game Store</a>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="border focus:ring-neutral-500 text-neutral-950 border-neutral-300 focus:border-neutral-700 p-2 rounded"
          />
        </div>

        <div className="space-x-4">
          <a className="text-neutral-950 hover:text-neutral-700">Productos</a>
          <a href='./login' className="text-neutral-950 hover:text-neutral-700">Iniciar Sesión</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;