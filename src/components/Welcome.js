import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";

const Welcome = ({ onSectionChange }) => {
  const images = [
    'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028058/imagenpatio2_p1o7dx.jpg',
    'https://res.cloudinary.com/doxadkm4r/image/upload/v1732043228/galery_htyfrz.jpg',
    'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028058/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.20_f17daf18_zqnddo.jpg',
    'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/casaDeDia_jus6pe.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Helmet>
        <title>Bienvenidos a Corral de Zainos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="relative text-center text-white p-6 z-10 max-w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Bienvenidos a Corral de Zainos
        </h1>

        <p className="text-base md:text-lg lg:text-xl mb-6">
          Viví una experiencia inolvidable rodeado de naturaleza.
        </p>

        <div className="flex flex-col lg:flex-row gap-2 justify-center mt-4">
          <button
            onClick={() => onSectionChange('gallery')}
            className="bg-[#C5956A]/70 text-white py-2 px-6 rounded-full shadow-md transition hover:bg-[#C5956A]/90"
          >
            Ver Galería
          </button>
          <button
            onClick={() => onSectionChange('ReservationInfo')}
            className="bg-[#C5956A]/70 text-white py-2 px-6 rounded-full shadow-md transition hover:bg-[#C5956A]/90"
          >
            Reserva
          </button>
          <button
            onClick={() => onSectionChange('contact')}
            className="bg-[#C5956A]/70 text-white py-2 px-6 rounded-full shadow-md transition hover:bg-[#C5956A]/90"
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
