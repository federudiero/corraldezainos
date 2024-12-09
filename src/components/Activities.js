import React from "react";

const Activities = () => {
  const activities = [
    {
      name: "Explorar paisajes únicos",
      description: "Disfruta del entorno natural impresionante del parque.",
      imageUrl: "https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/imagen_paisaje.jpg"
    },
    {
      name: "Actividades acuáticas",
      description: "Paseos en barco y actividades sobre el lago.",
      imageUrl: "https://res.cloudinary.com/doxadkm4r/image/upload/v1732043228/actividades_lago.jpg"
    },
    {
      name: "Senderismo y caminatas",
      description: "Descubre rutas naturales y vistas espectaculares.",
      imageUrl: "https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/sendero.jpg"
    },
    {
      name: "Observar fauna y aves",
      description: "Una experiencia única para conectar con la naturaleza.",
      imageUrl: "https://res.cloudinary.com/doxadkm4r/image/upload/v1732028056/aves.jpg"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-green-200 to-gray-50">
      <div className="container mx-auto px-6 mt-16"> {/* Margin superior para evitar solape */}

        {/* Encabezado principal */}
        <h2 className="text-center text-5xl font-bold mb-6 text-gray-900">
          🌳 Qué hacer en Ansenuza
        </h2>

        {/* Video del parque con tamaño reducido */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Parque Nacional Ansenuza"
            frameBorder="0"
            className="w-full h-64"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Tarjetas de actividades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={activity.imageUrl}
                alt={activity.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-gray-900 font-bold text-xl mt-2">
                  {activity.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Activities;
