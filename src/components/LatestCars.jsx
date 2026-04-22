import React from 'react';
import CarCard from './CarCard';

const LatestCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Jeep Grand Cherokee',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
      year: '2022',
      transmission: 'Automático',
      mileage: '28,500 miles',
      price: '$38,500',
      location: 'Santiago, RD'
    },
    {
      id: 2,
      name: 'Ford F-150 Lariat',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
      year: '2023',
      transmission: 'V6 EcoBoost',
      mileage: '15,200 miles',
      price: '$52,900',
      location: 'Santiago, RD'
    },
    {
      id: 3,
      name: 'Chevrolet Tahoe',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
      year: '2021',
      transmission: 'V8 Engine',
      mileage: '32,100 miles',
      price: '$45,800',
      location: 'Santiago, RD'
    }
  ];

  return (
    <div className="home6-letest-car-section" id="vehiculos">
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="section-title-2">
              <h2>Vehículos Destacados</h2>
              <p>Explora nuestra selección premium de vehículos importados en condiciones excepcionales</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {cars.map(car => (
            <div key={car.id} className="col-lg-4 col-md-6">
              <CarCard car={car} />
            </div>
          ))}
        </div>
        <div className="text-center mt-50">
          <a className="primary-btn1 px-5" href="/vehiculos">
            VER CATÁLOGO COMPLETO <i className="bi bi-arrow-right-short ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestCars;
