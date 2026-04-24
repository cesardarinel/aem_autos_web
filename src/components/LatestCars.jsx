import React from 'react';
import { useState, useEffect } from 'react';
import { getContentEntries } from '../lib/api';
import CarCard from './CarCard';

const LatestCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      try {
        const data = await getContentEntries('vehiculo');
        setCars(data.slice(0, 6));
      } catch (error) {
        console.error('Error loading vehicles:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);

  if (loading) {
    return (
      <div className="home6-letest-car-section" id="vehiculos">
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </div>
    );
  }

  if (cars.length === 0) {
    return null;
  }

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