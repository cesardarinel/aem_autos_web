import React from 'react';
import { getEntry, getContentEntries } from '../lib/api';
import CarDetail from './CarDetail';

const CarDetailClient = ({ vehicleId }) => {
  const [car, setCar] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadCar() {
      try {
        let id = vehicleId;
        
        // Si no viene por prop, intentar extraerlo de la URL (formato: slug-id)
        if (!id) {
          const pathParts = window.location.pathname.split('/');
          const slugPart = pathParts[pathParts.length - 1]; // "nombre-carro-58"
          const slugSegments = slugPart.split('-');
          id = slugSegments[slugSegments.length - 1]; // "58"
        }
        
        if (!id || isNaN(id)) {
          setError('Vehículo no encontrado');
          setLoading(false);
          return;
        }
        
        const data = await getEntry('vehiculo', id);
        if (data) {
          console.log('Campos disponibles en el vehículo:', Object.keys(data));
          console.log('Datos completos del vehículo:', data);
          setCar(data);
          document.title = (data.name || 'Vehículo') + ' ' + (data.year || '') + ' | AEM Autos';
        } else {
          // Fallback: buscar en el listado completo si getEntry falla
          const cars = await getContentEntries('vehiculo');
          const found = cars.find(c => c.id.toString() === id.toString());
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
  }, [vehicleId]);

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
