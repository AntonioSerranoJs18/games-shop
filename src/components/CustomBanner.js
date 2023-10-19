// components/CustomBanner.js

import React from 'react';

const CustomBanner = ({ imageUrl, title, subtitle, buttonText, height }) => {
  const bannerStyle = {
    backgroundImage: `url('${imageUrl}')`,
    minHeight: `${height}px`,
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-white" style={bannerStyle}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">{title}</h1>
          <p className="text-lg">{subtitle}</p>
          <button className="bg-red-600 text-white py-2 px-4 mt-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
