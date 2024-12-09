import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowBack, ArrowForward } from "@mui/icons-material";


const fondo= 'https://res.cloudinary.com/doxadkm4r/image/upload/v1732043228/galery_htyfrz.jpg'

const images = [
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/piletaPortada_tsg0o3.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/patio1_rla74k.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/piletaConLasHojas_ykr6fv.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/piedraYCasa_rclxcv.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/ParteDeAdelante_ksbpvm.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/corraldezainos_tqjn0u.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/asaditoyFernet_xpinfb.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028058/imagenpatio2_p1o7dx.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028058/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.20_f17daf18_zqnddo.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028057/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.36_a6992d9a_qukt3w.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732546891/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.17_e5973452_xotzjp.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732546892/aves1_kr1a5j.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732546892/aves3_ko4mvp.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732546891/flamenco1_voecz5.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732546891/avs4_iwqb1d.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028061/puertaDeMadera_b2tzxz.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028060/piletaPortada_tsg0o3.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028059/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.27_594a4129_g0mutd.jpg',
  
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028057/Imagen_de_WhatsApp_2024-10-09_a_las_18.30.35_d1241ca6_iawdxo.jpg',
  'https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/casaDeDia_jus6pe.jpg',
  
];
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-6 gap-6 mt-[60px]"
      style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}
    >
      {/* Capa oscura para resaltar contenido */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

      {/* Contenido principal */}
      <motion.div
        className="relative w-full max-w-2xl h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer z-10"
        onClick={() => openModal(images.indexOf(selectedImage))}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
        />
      </motion.div>

      {/* Miniaturas */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 z-10">
      {images.map((img, index) => (
  <motion.div
    key={index}
    onClick={() => setSelectedImage(img)}
    className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform ${
      selectedImage === img ? "ring-4 ring-green-500" : ""
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={img}
      alt={`Thumbnail ${index + 1}`}
      className="w-full h-24 sm:h-28 lg:h-32 object-cover"
    />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative bg-white p-1 rounded-lg"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentIndex]}
              alt="Modal"
              className="w-full max-w-2xl h-auto object-cover border-none"
            />
          <button
  onClick={goToPrevious}
  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-600"
>
  <ArrowBack fontSize="large" />
</button>
<button
  onClick={goToNext}
  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full hover:bg-gray-600"
>
  <ArrowForward fontSize="large" />
</button>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
            >
              X
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
