import React from 'react';
import Head from 'next/head';
import DefaultCarousel from '@/components/Carousel';
import ECommerceCard from '@/components/Card';

const HomePage = () => {
  return (
    <div className="container mx-auto my-10">
      <Head>
        <title>Tienda en Línea</title>
        <meta name="description" content="Bienvenido a nuestra tienda en línea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-96 w-auto">
      <DefaultCarousel/>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-70 w-80">
      <ECommerceCard/>
      </div>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a nuestra tienda en línea</h1>
        <p className="text-lg mb-10">Encuentra los mejores productos al mejor precio.</p>
        <a href="./productos" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Productos
        </a>
      </main>
    </div>
  );
};

export default HomePage;