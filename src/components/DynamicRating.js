'use client';

import { Rating } from 'flowbite-react';

export default function DynamicRating({ initialRating }) {
  return (
    <Rating>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <Rating.Star
            key={index}
            filled={index < initialRating}
          />
        ))}
    </Rating>
  );
}



