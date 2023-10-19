
import CustomBanner from '@/components/CustomBanner'
import React from 'react'
import RecommendedGames from '@/components/RecommendedGames '


const Home = () => {
  return (
    <>
      <div className='h-full'>
        <CustomBanner
          imageUrl="https://4kwallpapers.com/images/wallpapers/call-of-duty-modern-3840x2160-12647.jpeg"
          title="¡Bienvenido a game shop!"
          subtitle="Explora nuestras increíbles ofertas y productos."
          buttonText="Explorar"
          height={500}
        />
      </div>

      <div>
        <RecommendedGames/>
      </div>

    </>
  )
}

export default Home
