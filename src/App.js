import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../src/components/Navbar';
import Welcome from '../src/components/Welcome';
import Gallery from '../src/components/Gallery';
import Contact from '../src/components/Contact';
import ReservationInfo from '../src/components/ReservationInfo';
import WhatsAppButton from '../src/components/WhatsAppButton';
import Activities from '../src/components/Activities';

const App = () => {
  const [activeSection, setActiveSection] = useState('welcome');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const variants = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -200, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative">
     
      {activeSection !== 'welcome' && <Navbar onSectionChange={handleSectionChange} />}

      
      <WhatsAppButton />

    
      <div className="w-full h-screen bg-transparent flex items-center justify-center">
        <motion.div
          key={activeSection}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full"
        >
          {activeSection === 'welcome' && <Welcome onSectionChange={handleSectionChange} />}
          {activeSection === 'gallery' && <Gallery />}
          {activeSection === 'contact' && <Contact />}
          {activeSection === 'ReservationInfo' && <ReservationInfo />}
          {activeSection === 'Activities' && <Activities />}
        </motion.div>
      </div>
      
    </div>
  );
};

export default App;
