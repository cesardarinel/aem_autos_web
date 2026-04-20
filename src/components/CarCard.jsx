import React from 'react';
import { Gauge, Fuel, ArrowRight } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="vehicle-card bg-white rounded-2xl overflow-hidden border border-brand-silver shadow-lg">
      <div className="relative">
        <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
        <div className="absolute top-4 right-4 bg-brand-metal text-white text-xs font-bold px-3 py-1 rounded-full">AAA+</div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-brand-dark">{car.name}</h3>
            <p className="text-gray-500 text-sm">{car.year} • {car.transmission} • {car.engine}</p>
          </div>
          <span className="text-brand-navy font-bold text-xl">{car.price}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Gauge size={16} /> {car.mileage}</span>
          <span className="flex items-center gap-1"><Fuel size={16} /> {car.fuel}</span>
        </div>
        <a 
          href={`https://wa.me/18299951554?text=Me%20interesa%20el%20${encodeURIComponent(car.name)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary-custom w-full bg-brand-navy hover:bg-brand-metal text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          Más información
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default CarCard;
