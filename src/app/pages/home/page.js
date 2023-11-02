import React from 'react';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import DefaultCarousel from '@/components/Carousel';
import ECommerceCard from '@/components/Card';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>Tienda en Línea</title>
        <meta name="description" content="Bienvenido a nuestra tienda en línea"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Navbar/>

      <main className="text-center py-28 flex-1">
        <h1 className="text-4xl font-bold mt-10 mb-6 text-neutral-950">Bienvenido a nuestra tienda en línea</h1>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-96 w-auto mb-12">
          <DefaultCarousel/>
        </div>

        <p className="text-lg mb-4 text-neutral-900">Encuentra los mejores productos al mejor precio.</p>
        <a href="./productos" className="bg-transparent hover:text-sky-300 text-sky-500 font-bold py-2 px-4">
          Ver Productos &gt;
        </a>
      </main>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <h1 className="text-2xl font-bold mb-4 text-neutral-900">Recomendaciones para ti</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <ECommerceCard/>
          </div>
          <div className="mb-4">
            <ECommerceCard/>
          </div>
          <div className="mb-4">
            <ECommerceCard/>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default HomePage;
