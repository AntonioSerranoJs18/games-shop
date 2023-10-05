'use client';

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
  return (
    <Carousel>
      <img
        alt="..."
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
      />
      <img
        alt="..."
        src="https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg"
      />
      <img
        alt="..."
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
}