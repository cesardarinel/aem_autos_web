import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="floating-container d-md-none">
      <a 
        href="https://wa.me/18099973787" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp"
        aria-label="Contactar por WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <a 
        href="tel:+18099973787" 
        className="floating-btn phone"
        aria-label="Llamar ahora"
      >
        <i className="bi bi-telephone-fill"></i>
      </a>
    </div>
  );
};

export default FloatingButtons;
