import React, { useState } from 'react';

const CarDetail = ({ car }) => {
  if (!car) return null;

  const [selectedImage, setSelectedImage] = useState(car.image);

  const priceFormatted = typeof car.price === 'number' 
    ? `${car.priceCurrency || 'US$'} ${car.price.toLocaleString()}` 
    : (car.price || 'Consultar');

  const whatsappMessage = `Hola, me interesa el ${car.brand} ${car.model} ${car.year} que vi en su sitio web.`;
  const whatsappUrl = `https://wa.me/18099973787?text=${encodeURIComponent(whatsappMessage)}`;

  // Quitamos el filtro agresivo para que las características NO se oculten
  const specsRow1 = [
    { label: 'Transmisión', value: car.transmission || 'N/D', icon: 'bi-gear' },
    { label: 'Tracción', value: car.drive || 'N/D', icon: 'bi-compass' },
    { label: 'Combustible', value: car.fuel || 'N/D', icon: 'bi-fuel-pump' },
    { label: 'Uso', value: car.mileage || 'N/D', icon: 'bi-speedometer2' },
  ];

  const generalRows = [
    [{ label: 'Precio', value: priceFormatted }, { label: 'Marca', value: car.brand }],
    [{ label: 'Modelo', value: car.model }, { label: 'Año', value: car.year }],
    [{ label: 'Combustible', value: car.fuel || 'N/D' }, { label: 'Transmisión', value: car.transmission || 'N/D' }],
    [{ label: 'Tracción', value: car.drive || 'N/D' }, { label: 'Uso', value: car.mileage || 'N/D' }],
    [{ label: 'Tipo', value: car.type || 'N/D' }, { label: 'Color', value: car.color || 'N/D' }],
  ];

  const isAvailable = car.statusRaw !== 'vendido';

  return (
    <div className="car-detail-section py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-muted">Inicio</a></li>
              <li className="breadcrumb-item"><a href="/vehiculos" className="text-decoration-none text-muted">Vehículos</a></li>
              <li className="breadcrumb-item active fw-bold">{car.brand} {car.model}</li>
            </ol>
          </nav>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            {/* Imagen y Galería */}
            <div className="card border-0 shadow-sm mb-3 rounded-4 overflow-hidden bg-white">
              <img src={selectedImage || car.image} className="img-fluid w-100" style={{ height: 'auto', maxHeight: '550px', objectFit: 'cover' }} alt={car.name} />
            </div>

            {car.gallery && car.gallery.length > 1 && (
              <div className="row g-2 mb-4">
                {car.gallery.map((img, index) => (
                  <div key={index} className="col-3 col-md-2">
                    <div 
                      className={`rounded-3 overflow-hidden border-2 ${selectedImage === img ? 'border-primary border' : 'border-transparent'}`}
                      style={{ cursor: 'pointer', aspectRatio: '4/3' }}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} className="w-100 h-100" style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CARACTERÍSTICAS (Iconos rápidos) */}
            <div className="card border-0 shadow-sm mb-4 p-4 rounded-4 bg-white">
              <div className="row text-center g-3">
                {specsRow1.map((spec, idx) => (
                  <div key={idx} className="col-6 col-md-3">
                    <i className={`${spec.icon} d-block text-primary fs-3 mb-2`}></i>
                    <span className="small text-muted d-block">{spec.label}</span>
                    <span className="fw-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TABLA DE DATOS GENERALES */}
            <div className="card border-0 shadow-sm mb-4 rounded-4 bg-white overflow-hidden">
              <div className="card-header bg-white py-3 border-bottom">
                <h5 className="fw-bold mb-0">Datos Generales</h5>
              </div>
              <div className="card-body p-0">
                <div className="row g-0">
                  {generalRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="col-md-6 border-bottom">
                      {row.map((cell, cellIdx) => (
                        <div key={cellIdx} className="d-flex justify-content-between p-3 border-bottom-last-0">
                          <span className="text-muted">{cell.label}:</span>
                          <span className="fw-bold">{cell.value}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ACCESORIOS */}
            {car.accessories && car.accessories.length > 0 && (
              <div className="card border-0 shadow-sm mb-4 rounded-4 bg-white p-4">
                <h5 className="fw-bold mb-3 border-bottom pb-2">Accesorios</h5>
                <div className="row g-3">
                  {car.accessories.map((acc, index) => (
                    <div key={index} className="col-md-4 col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{acc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {car.description && (
              <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
                <h5 className="fw-bold mb-3 border-bottom pb-2">Información Adicional</h5>
                <p className="text-muted mb-0" style={{ whiteSpace: 'pre-line' }}>{car.description}</p>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-lg p-4 mb-4 rounded-4 bg-white border-top border-primary border-5">
                <h1 className="fw-bold h2 mb-1">{car.brand} {car.model}</h1>
                <p className="text-muted mb-3">Año {car.year}</p>
                <h2 className="text-primary fw-bold mb-4">{priceFormatted}</h2>
                <div className="d-grid gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg py-3 fw-bold rounded-pill">WHATSAPP</a>
                  <a href="tel:18099973787" className="btn btn-dark btn-lg py-3 fw-bold rounded-pill">LLAMAR</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
