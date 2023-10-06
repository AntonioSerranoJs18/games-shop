import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 rounded text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold ms-4 mb-4">Nuestra Tienda</h2>
          <p className='ms-4'>123 Calle Principal</p>
          <p className='ms-4'>Mérida, Yucatán</p>
          <p className='ms-4'>Email: gamestore@microsoft.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Enlaces Rápidos</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Redes Sociales</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;