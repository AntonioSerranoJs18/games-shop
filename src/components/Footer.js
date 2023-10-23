import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <span className='text-neutral-950'>© 2023 Game Store. Todos los derechos reservados.</span>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-neutral-950 hover:text-neutral-500">Inicio</a></li>
            <li><a href="#" className="text-neutral-950 hover:text-neutral-500">Productos</a></li>
            <li><a href="#" className="text-neutral-950 hover:text-neutral-500">Acerca de Nosotros</a></li>
            <li><a href="#" className="text-neutral-950 hover:text-neutral-500">Contacto</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;