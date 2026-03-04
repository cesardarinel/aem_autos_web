import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="card h-100">
      <div style={{ height: '200px', backgroundColor: '#e2e8f0', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="text-muted">Marcador de Imagen</span>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i> {car.location}
        </div>
        <h5 className="card-title fw-bold" style={{ color: 'var(--primary-blue)' }}>{car.title}</h5>
        
        <ul className="list-unstyled mt-3 mb-4 d-flex justify-content-between text-muted small">
          <li><i className="bi bi-speedometer2 me-1"></i> {car.mileage}</li>
          <li><i className="bi bi-fuel-pump me-1"></i> {car.fuel}</li>
          <li><i className="bi bi-gear me-1"></i> {car.cc}</li>
        </ul>
        
        <div className="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
          <a href="#" className="btn btn-outline-primary" style={{ borderRadius: '8px', borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)' }}>Ver Detalles</a>
          <div className="text-end">
            <span className="d-block text-muted small">Gran Precio</span>
            <span className="fw-bold fs-5" style={{ color: 'var(--accent-orange)' }}>{car.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;