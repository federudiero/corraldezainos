import React, { useState } from 'react';
import img1 from '../img/reservas.jpg'; // Reemplaza con la ruta de tu imagen

const ReservaTuInfo = () => {
  const fondo =
    'https://res.cloudinary.com/doxadkm4r/image/upload/v1732043170/reservas_yz8fvi.jpg';
  const [selectedModal, setSelectedModal] = useState(null); // Estado para controlar el modal abierto

  // Datos de los divs
  const info = [
    {
      title: 'Proceso de Reserva',
      content:
        'Reserva fácilmente desde nuestra página web mediante el formulario que tiene el boton de WhatsApp o por la seccion de contactos donde estan nuestros WhatsApp. Solo necesitas proporcionar algunos datos básicos y elegir tu fecha.',
    },
    {
      title: 'Facilidades de Pago',
      content:
        'Nuestra cabaña ofrece opciones de pago seguras, como transferencia bancaria o pago en efectivo. para realizar tu reserva debes hacerla con un anticipo del 50%.',
    },
    {
      title: 'Capacidad',
      content:
        'Nuestras cabañas tienen una capacidad de hasta 10 personas por unidad, lo que las hace perfectas para familias pequeñas o grupos de amigos.',
    },
    {
      title: 'Comodidades',
      content:
        'Las cabañas están equipadas con cocina completa, vajillas, ropa blancas , aire acondicionado,pileta y conexión WiFi gratuita.',
    },
  ];

  const handleModalOpen = (index) => {
    setSelectedModal(index); // Abre el modal correspondiente
  };

  const handleModalClose = () => {
    setSelectedModal(null); // Cierra el modal
  };

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9] py-12 mt-[60px]"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }}
    >
      {/* Capa oscura para resaltar el contenido */}
      <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-center text-white font-pacifico shadow-lg">
          Información de Reserva
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#3a3a3a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#5c5c5c] hover:scale-105 hover:z-10 hover:shadow-xl cursor-pointer opacity-85"
              onClick={() => handleModalOpen(index)} // Al hacer clic, se abre el modal
            >
              <h3 className="text-2xl font-bold text-white font-oswald tracking-wider uppercase">
                {item.title}
              </h3>
              <p className="text-white font-roboto text-sm mt-3">
                {item.content.substring(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedModal !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <h3 className="text-2xl font-bold text-black font-oswald tracking-wider uppercase">
              {info[selectedModal].title}
            </h3>
            <p className="text-black font-roboto mt-4">{info[selectedModal].content}</p>
            <button
              className="absolute top-2 right-2 text-2xl text-black"
              onClick={handleModalClose}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservaTuInfo;
