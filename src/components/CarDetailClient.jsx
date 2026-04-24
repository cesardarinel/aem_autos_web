import React from 'react';
import { getEntry, getContentEntries } from '../lib/api';
import CarDetail from './CarDetail';

const CarDetailClient = () => {
  const [car, setCar] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadCar() {
      try {
        const pathParts = window.location.pathname.split('/vehiculo/');
        const id = pathParts[1];
        
        if (!id) {
          setError('ID no proporcionado');
          setLoading(false);
          return;
        }
        
        const data = await getEntry('vehiculo', id);
        
        if (data) {
          setCar(data);
          document.title = (data.name || 'Vehículo') + ' ' + (data.year || '') + ' | AEM Autos';
        } else {
          const cars = await getContentEntries('vehiculo');
          const found = cars.find(c => c.id.toString() === id);
          if (found) {
            setCar(found);
            document.title = (found.name || 'Vehículo') + ' ' + (found.year || '') + ' | AEM Autos';
          } else {
            setError('Vehículo no encontrado');
          }
        }
      } catch (err) {
        console.error('Error loading car:', err);
        setError('Error al cargar el vehículo');
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

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3>{error}</h3>
        <a href="/vehiculos" className="btn btn-primary mt-3">Ver Inventario</a>
      </div>
    );
  }

  return <CarDetail car={car} />;
};

export default CarDetailClient;