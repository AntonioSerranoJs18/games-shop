import React from 'react';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import DefaultCarousel from '@/components/Carousel';
import ECommerceCard from '@/components/Card';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

const HomePage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
    <div className="container mx-auto my-10 bg-white">
      <Head>
        <title>Tienda en Línea</title>
        <meta name="description" content="Bienvenido a nuestra tienda en línea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <main className="text-center">
        <h1 className="text-4xl font-bold mt-10 mb-1 text-neutral-950">Bienvenido a nuestra tienda en línea</h1>
        <Button/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 h-96 w-auto">
        <DefaultCarousel/>
        </div>

        <p className="text-lg mb-2 text-neutral-900">Encuentra los mejores productos al mejor precio.</p>
        <a href="./productos" className="bg-transparent hover:text-sky-300   text-sky-500 font-bold py-2 px-4">
          Ver Productos &gt;
        </a>
      </main>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <ECommerceCard/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <ECommerceCard/>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <ECommerceCard/>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
    </section>
  );
};

export default HomePage;