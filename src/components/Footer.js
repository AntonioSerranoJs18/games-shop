import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Tienda</h2>
          <p>Game Store</p>
          <p>Merida, Yucatan</p>
          <p>Email: gamestore@outlook.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Enlaces Rápidos</h2>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Soporte</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Redes Sociales</h2>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
