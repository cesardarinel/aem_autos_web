import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="product-card4 style-3 shadow-sm h-100">
      <div className="product-img">
        <img 
          src={car.image} 
          alt={car.name} 
          className="img-fluid" 
          style={{ height: '220px', objectFit: 'cover', width: '100%' }} 
          width="400"
          height="250"
          loading="lazy"
        />
        <div className="number-of-img">
           <i className="bi bi-camera me-1"></i> 1
        </div>
      </div>
      <div className="product-content p-4">
        <div className="location text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i> {car.location || 'Santiago, RD'}
        </div>
        <h6 className="mb-3"><a href="#" className="text-decoration-none text-dark fw-bold">{car.name} - {car.year}</a></h6>
        <ul className="list-unstyled d-flex gap-3 mb-4 small text-muted">
          <li><i className="bi bi-speedometer2 me-1"></i> {car.mileage}</li>
          <li><i className="bi bi-fuel-pump me-1"></i> Gasolina</li>
        </ul>
        <div className="d-flex justify-content-between align-items-center">
          <a className="btn btn-sm btn-primary" href={`https://wa.me/18299951554?text=Me%20interesa%20el%20${car.name}`}>Detalles</a>
          <div className="price-area text-end">
            <span className="small d-block text-muted">Precio</span>
            <h6 className="mb-0 fw-bold text-primary">{car.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
