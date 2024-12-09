import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const today = new Date();
  const initialCheckIn = today.toISOString().split('T')[0];
  const initialCheckOut = new Date(today.setDate(today.getDate() + 1))
    .toISOString()
    .split('T')[0];

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    people: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Ajustar automáticamente `checkOut` si `checkIn` cambia
      if (name === 'checkIn') {
        const checkInDate = new Date(value);
        const checkOutDate = new Date(updated.checkOut);

        if (checkOutDate <= checkInDate) {
          const newCheckOut = new Date(checkInDate.setDate(checkInDate.getDate() + 1));
          updated.checkOut = newCheckOut.toISOString().split('T')[0];
        }
      }

      return updated;
    });
  };

  const validateForm = () => {
    const { name, checkIn, checkOut, people } = formData;

    if (!name || !checkIn || !checkOut || !people) {
      return 'Por favor, completa todos los campos.';
    }

    if (/\d/.test(name)) {
      return 'El nombre no puede contener números.';
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const oneMonthLater = new Date(checkInDate);
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

    if (checkOutDate > oneMonthLater) {
      return 'La estadía no puede ser mayor a un mes.';
    }

    if (checkInDate >= checkOutDate) {
      return 'La fecha de salida debe ser posterior a la fecha de llegada.';
    }

    return '';
  };

  const handleSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const message = `Hola, soy ${formData.name}. Me gustaría consultar disponibilidad desde el ${formData.checkIn} hasta el ${formData.checkOut} para ${formData.people} personas.`;
    const whatsappURL = `https://wa.me/+5493541546164?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-[9999]">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ width: '200px' }}
          className="bg-green-500 p-4 rounded-full shadow-lg text-white flex items-center justify-start overflow-hidden relative transition-all duration-300"
          style={{ width: '60px', height: '60px' }}
        >
          <WhatsAppIcon className="absolute left-4" />
          <span className="text-white text-sm ml-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
            Consulta Disponibilidad
          </span>
        </motion.button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[10000] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
          >
            <h2 className="text-lg font-bold mb-4">Consultar Disponibilidad</h2>
            <form className="space-y-4">
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Día de llegada</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  min={initialCheckIn}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Día de salida</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  min={formData.checkIn}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cantidad de personas</label>
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  max="10"
                  min="1"
                  className="w-full border rounded p-2"
                  placeholder="Máximo 10 personas"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Consultar Disponibilidad
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
