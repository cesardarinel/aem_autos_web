import React from 'react';

const CarCard = ({ car }) => {
  const carId = car?.id ?? car?.ID ?? 0;
  const priceFormatted = typeof car.price === 'number' 
    ? `$${car.price.toLocaleString()}` 
    : car.price;
  const statusIsAvailable = car.statusRaw !== 'vendido';

  return (
    <div className="product-card4 style-3 shadow-sm h-100 border-0 overflow-hidden bg-white">
      <div className="product-img position-relative">
        <a href={`/vehiculo/${carId}`}>
          <img 
            src={car.image} 
            alt={car.name} 
            className="img-fluid" 
            style={{ height: '220px', objectFit: 'cover', width: '100%' }} 
            loading="lazy"
          />
        </a>
        {!statusIsAvailable && (
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center">
            <span className="badge bg-danger fs-4">VENDIDO</span>
          </div>
        )}
      </div>
      <div className="product-content p-4">
        <div className="location text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i> {car.location || 'Santiago, RD'}
        </div>
        <h6 className="mb-3">
          <a href={`/vehiculo/${carId}`} className="text-decoration-none text-dark fw-bold h5 d-block">
            {car.brand} {car.model}
          </a>
        </h6>
        <ul className="list-unstyled d-flex gap-3 mb-4 small text-muted">
          <li className="d-flex align-items-center"><i className="bi bi-calendar me-1"></i> {car.year}</li>
          <li className="d-flex align-items-center"><i className="bi bi-fuel-pump me-1"></i> {car.fuel || 'Gasolina'}</li>
        </ul>
        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
          <div className="price-area">
            <span className="small d-block text-muted">Precio</span>
            <h6 className="mb-0 fw-bold text-primary fs-5">{priceFormatted}</h6>
          </div>
          <div className="text-end">
            <span className={`badge ${statusIsAvailable ? 'bg-success' : 'bg-secondary'}`}>
              {car.status || 'Disponible'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;