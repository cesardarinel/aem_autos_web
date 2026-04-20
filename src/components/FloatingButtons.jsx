import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="https://wa.me/18299951554" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="tel:+18299951554" 
        className="floating-btn bg-brand-navy hover:bg-brand-metal text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
        aria-label="Llamar ahora"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
