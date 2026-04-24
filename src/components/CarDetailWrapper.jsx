import React from 'react';
import { getEntry } from '../lib/api';
import CarDetail from './CarDetail';

const CarDetailWrapper = () => {
  const [car, setCar] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadCar() {
      const pathParts = window.location.pathname.split('/vehiculo/');
      const id = pathParts[1];
      
      if (!id) {
        setLoading(false);
        return;
      }
      
      try {
        const data = await getEntry('vehiculo', id);
        setCar(data);
      } catch (error) {
        console.error('Error loading car:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCar();
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="container py-5 text-center">
        <h3>Vehículo no encontrado</h3>
        <a href="/vehiculos" className="btn btn-primary mt-3">Ver Inventario</a>
      </div>
    );
  }

  return <CarDetail car={car} />;
};

export default CarDetailWrapper;