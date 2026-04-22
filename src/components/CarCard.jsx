import React from 'react';

const CarCard = ({ car }) => {
  const priceFormatted = typeof car.price === 'number' 
    ? `$${car.price.toLocaleString()}` 
    : car.price;

  return (
    <div className="product-card4 style-3 shadow-sm h-100 border-0 overflow-hidden bg-white">
      <div className="product-img position-relative">
        <a href={`/vehiculo/${car.id}`}>
          <img 
            src={car.image} 
            alt={car.name} 
            className="img-fluid" 
            style={{ height: '220px', objectFit: 'cover', width: '100%' }} 
            loading="lazy"
          />
        </a>
        <div className="number-of-img position-absolute bottom-0 start-0 m-3 bg-dark bg-opacity-50 text-white px-2 py-1 rounded small">
           <i className="bi bi-camera me-1"></i> 1
        </div>
      </div>
      <div className="product-content p-4">
        <div className="location text-muted small mb-2">
          <i className="bi bi-geo-alt me-1"></i> {car.location || 'Santiago, RD'}
        </div>
        <h6 className="mb-3">
          <a href={`/vehiculo/${car.id}`} className="text-decoration-none text-dark fw-bold h5 d-block">
            {car.name} - {car.year}
          </a>
        </h6>
        <ul className="list-unstyled d-flex gap-3 mb-4 small text-muted">
          <li className="d-flex align-items-center"><i className="bi bi-speedometer2 me-1"></i> {car.mileage}</li>
          <li className="d-flex align-items-center"><i className="bi bi-fuel-pump me-1"></i> {car.fuel || 'Gasolina'}</li>
        </ul>
        <div className="d-flex justify-content-between align-items-center pt-3 border-top">
          <div className="price-area">
            <span className="small d-block text-muted">Precio</span>
            <h6 className="mb-0 fw-bold text-primary fs-5">{priceFormatted}</h6>
          </div>
          <div className="d-flex gap-2">
            <a 
              className="btn btn-primary btn-sm px-3 rounded-pill fw-bold" 
              href={`/vehiculo/${car.id}`}
            >
              Detalles
            </a>
            <a 
              className="btn btn-primary d-flex align-items-center justify-content-center rounded-circle" 
              href={`https://wa.me/18099973787?text=Me%20interesa%20el%20${encodeURIComponent(car.name)}`} 
              target="_blank" 
              rel="noreferrer"
              style={{ width: '32px', height: '32px', padding: '0' }}
              title="Contactar por WhatsApp"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: '0.9rem' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
