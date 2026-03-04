import React from 'react';
import CarCard from './CarCard';

const LatestCars = () => {
  const cars = [
    { id: 1, title: 'Toyota Camry-2023', location: 'Santo Domingo', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$3,560' },
    { id: 2, title: 'Volkswagen Golf-2023', location: 'Santiago', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$55,656' },
    { id: 3, title: 'Lexus RX-2021', location: 'Punta Cana', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$65,656' },
    { id: 4, title: 'Cadillac Escalade-2023', location: 'La Romana', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$62,787' },
    { id: 5, title: 'Mazda CX-30-2021', location: 'Puerto Plata', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$54,614' },
    { id: 6, title: 'Jeep Wrangler-2023', location: 'Santo Domingo', mileage: '25,100 millas', fuel: 'Gasolina', cc: '22,231 cc', price: '$48,651' },
  ];

  return (
    <section className="py-5 mt-4">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ color: 'var(--primary-blue)' }}>Últimos Vehículos</h2>
          <p className="text-muted">Para obtener la información más precisa y actualizada</p>
        </div>
        
        <ul className="nav nav-tabs mb-4 border-0 justify-content-center">
          <li className="nav-item">
            <button className="nav-link active">Vehículos Destacados</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Últimos Vehículos</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Recién Listados</button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Menor Kilometraje</button>
          </li>
        </ul>

        <div className="row g-4">
          {cars.map(car => (
            <div className="col-lg-4 col-md-6" key={car.id}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCars;