import React from 'react';
import ECommerceCard from './ECommerceCard'; // Importa el componente de tarjeta

const RecommendedGames = () => {
  // Datos de ejemplo para las tarjetas (asegúrate de que cada juego tenga un ID único)
  const recommendedGames = [
    {
      id: 1,
      imgAlt: 'Elden Ring',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg',
      title: 'Elden Ring',
      rating: 5,
      price: '1070,96 MXN',
    },
    {
      id: 2,
      imgAlt: 'MW3',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/g0_uq-trkKf1RAL9WJNi8yiK5_2qSILmVjEqF02XXM8_350x200_1x-0.jpg',
      title: 'Call of Duty: Modern Warfare III',
      rating: 5,
      price: '1324,03 MXN',
    },
    {
      id: 3,
      imgAlt: 'CyberPunk',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/cD9TDsyAuPA2wlptOpvwn2IVCEen_0v-FnJEHAsr86c_350x200_1x-0.jpg',
      title: 'Cyberpunk 2077: Phantom Liberty',
      rating: 3,
      price: '711,75 MXN',
    },
    {
      id: 4,
      imgAlt: 'CyberPunk',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_350x200_1x-0.jpeg',
      title: 'Cyberpunk 2077',
      rating: 4,
      price: '919,01 MXN',
    },
    {
      id: 5,
      imgAlt: 'Minecraft',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_1x-0.png',
      title: 'Minecraft: Java & Bedrock Edition Official',
      rating: 5,
      price: '505,94 MXN', 
    },
    {
      id: 6,
      imgAlt: 'Mortal Kombat 11',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/94BY1T7noGspA1q8TkGtsy8TJ6shJ2pYFx9crJ1gPNg_350x200_1x-0.jpeg',
      title: 'Mortal Kombat 11',
      rating: 4,
      price: '63,46 MXN', 
    },
    {
      id: 7,
      imgAlt: 'The Last of Us Part I',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/VsZ3AMYJ--J8bogXI9ZoQk9qnQ_Zo3XNcNvZcpNR3cs_350x200_1x-0.jpg',
      title: 'The Last of Us Part I',
      rating: 4,
      price: '63,46 MXN', 
    },
    {
      id: 8,
      imgAlt: 'EA SPORTS FC 24',
      imgSrc: 'https://cdn-products.eneba.com/resized-products/iQnKhzUFz_oq1G-fm0rAJO_0dYd_g29ESxMyrGkNDa4_350x200_1x-0.jpg',
      title: 'EA SPORTS FC 24',
      rating: 3,
      price: '1074,01 MXN', 
    },
    // Agrega más juegos recomendados aquí...
  ];

  // Define cuántas tarjetas mostrar por fila
  const tarjetasPorFila = 4;

  // Divide las tarjetas en filas
  const filasDeTarjetas = [];
  for (let i = 0; i < recommendedGames.length; i += tarjetasPorFila) {
    filasDeTarjetas.push(recommendedGames.slice(i, i + tarjetasPorFila));
  }

  return (
    <div className="text-center">
      <h1 className="text-white text-2xl font-bold pt-10 pb-10">Recomendaciones para ti</h1>
      {filasDeTarjetas.map((fila, index) => (
        <div key={index} className="flex justify-center">
          {fila.map((game) => (
            <ECommerceCard
              key={game.id} // Asegúrate de que cada tarjeta tenga una clave única
              imgAlt={game.imgAlt}
              imgSrc={game.imgSrc}
              title={game.title}
              rating={game.rating}
              price={game.price}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecommendedGames;
