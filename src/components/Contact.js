import React from 'react';
import { WhatsApp, Instagram } from '@mui/icons-material';

const fondo = 'https://res.cloudinary.com/doxadkm4r/image/upload/v1732043170/contacto_p5eluf.jpg';

const ContactAndLocation = () => {
  return (
    <div
      className="relative min-h-screen p-8 bg-cover bg-center flex flex-col items-center justify-center pt-24 lg:pt-16"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Fondo oscuro en una capa inferior */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl w-full text-center mb-12 text-white">
        <p className="text-lg mb-4 font-roboto tracking-wide">
          Conoce nuestra ubicación en Ansenuza, Córdoba.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Sección de Contacto */}
        <div className="bg-[#4a4a4a] p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center opacity-90">
          <h3 className="text-2xl font-semibold mb-4 font-oswald tracking-wide text-white uppercase">
            Contáctanos
          </h3>

          {/* Botones de contacto */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://wa.me/+5493541546164"
              className="bg-[#25D366] text-white py-2 px-6 rounded-full inline-block flex items-center justify-center space-x-2 hover:bg-green-500 transition-all"
            >
              <WhatsApp className="text-white" />
              <span>Mauri +5493541546164</span>
            </a>
            <a
              href="https://wa.me/+5493562513840"
              className="bg-[#25D366] text-white py-2 px-6 rounded-full inline-block flex items-center justify-center space-x-2 hover:bg-green-500 transition-all"
            >
              <WhatsApp className="text-white" />
              <span>Andy +5493562513840</span>
            </a>
            <a
              href="https://instagram.com"
              className="bg-[#E1306C] text-white py-2 px-6 rounded-full inline-block flex items-center justify-center space-x-2 hover:bg-pink-600 transition-all"
            >
              <Instagram className="text-white" />
              <span>Instagram</span>
            </a>
          </div>
        </div>

        {/* Sección de Ubicación */}
        <div className="bg-[#d3c7c7] p-6 rounded-lg shadow-lg text-black opacity-90">
          <h3 className="text-2xl font-semibold mb-4 font-oswald tracking-wide uppercase">
            Ubicación de Corral de Zainos
          </h3>
          <p className="text-sm font-roboto leading-relaxed">
            Corral de Zainos está ubicado en La Paquita, dentro de la región de Ansenuza, Córdoba, Argentina, parte de la Reserva Provincial Laguna Mar Chiquita. Un entorno ideal para el ecoturismo y la observación de aves.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0195463648926!2d-62.878686784774086!3d-31.653363881320537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329bf0f0cf2671%3A0x70b68a1d226e4380!2sFalucho%20246%2C%20La%20Paquita%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1634761891900!5m2!1ses-419!2sar"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg mt-4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactAndLocation;
