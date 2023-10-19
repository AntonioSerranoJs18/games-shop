'use client';
import { Card } from 'flowbite-react';
import DynamicRating from './DynamicRating'; // Asegúrate de importar DynamicRating

export default function ECommerceCard({ imgAlt, imgSrc, title, rating, price }) {
  return (
    <Card
      imgAlt={imgAlt}
      imgSrc={imgSrc}
      className="w-full sm:w-1/5 md:w-1/5 lg:w-1/5 px-4 mb-8 mr-4 bg-gray-700 dark:bg-gray-800 transition-transform transform hover:scale-105"
    >
      <a href="#">
        <h5 className="text-base font-semibold text-white dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-2 mt-1 flex items-center">
        <DynamicRating initialRating={rating} /> {/* Utiliza DynamicRating para mostrar la calificación */}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-white dark:text-white">
          {price}
        </span>
        <a
          className="rounded-lg bg-sky-500 px-2 py-1 text-center text-xs font-medium text-white hover:bg-sky-300 focus:outline-none focus:ring-4 focus:ring-cyan-100 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          <p className="w-2">
            +
          </p>
        </a>
      </div>
    </Card>
  );
}
