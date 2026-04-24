import React from 'react';

const CarDetail = ({ car }) => {
  if (!car) return null;

  const priceFormatted = typeof car.price === 'number' 
    ? `${car.priceCurrency || 'US$'} ${car.price.toLocaleString()}` 
    : car.price;

  const whatsappMessage = `Hola, me interesa el ${car.name} ${car.year} que vi en su sitio web.`;
  const whatsappUrl = `https://wa.me/18099973787?text=${encodeURIComponent(whatsappMessage)}`;

  const hasValue = (val) => val !== undefined && val !== null && val !== '';

  const specsRow1 = [
    { label: 'Transmisión', value: car.transmission, icon: 'bi-gear' },
    { label: 'Tracción', value: car.drive, icon: 'bi-compass' },
    { label: 'Combustible', value: car.fuel, icon: 'bi-fuel-pump' },
    { label: 'SKU', value: car.sku, icon: 'bi-upc' },
  ].filter(s => hasValue(s.value));

  const generalRows = [
    [{ label: 'Precio', value: priceFormatted }, { label: 'Marca', value: car.brand }],
    [{ label: 'Modelo', value: car.model }, { label: 'Año', value: car.year }],
    [{ label: 'Combustible', value: car.fuel }, { label: 'Transmisión', value: car.transmission }],
    [{ label: 'Tracción', value: car.drive }, { label: 'Uso', value: car.mileage }],
    [{ label: 'Tipo', value: car.type }, { label: 'Ubicación', value: car.location }],
  ].filter(row => row.some(cell => hasValue(cell.value)));

  const hasAccessories = car.accessories && car.accessories.length > 0;
  const hasGeneralInfo = generalRows.length > 0;
  const hasSpecs = specsRow1.length > 0;
  const isAvailable = car.statusRaw !== 'vendido';

  return (
    <div className="car-detail-section py-5 bg-light">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-muted">Inicio</a></li>
              <li className="breadcrumb-item"><a href="/vehiculos" className="text-decoration-none text-muted">Vehículos</a></li>
              <li className="breadcrumb-item active fw-bold" aria-current="page">{car.name}</li>
            </ol>
          </nav>
          {car.sku && (
            <div className="text-muted small">
              <span>SKU: {car.sku}</span>
            </div>
          )}
        </div>

        {!isAvailable && (
          <div className="alert alert-danger text-center py-2 mb-4 rounded-4">
            <strong>VEHÍCULO VENDIDO</strong>
          </div>
        )}

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm mb-4 rounded-4 overflow-hidden bg-white">
              <img 
                src={car.image} 
                className="img-fluid" 
                alt={car.name} 
                style={{ height: 'auto', maxHeight: '550px', objectFit: 'cover', width: '100%' }}
              />
            </div>

            {hasSpecs && (
              <div className="card border-0 shadow-sm mb-4 p-3 rounded-4 bg-white">
                <div className="row text-center g-2">
                  {specsRow1.map((spec, idx) => (
                    <div key={idx} className={`col-${12 / specsRow1.length} ${idx < specsRow1.length - 1 ? 'border-end' : ''}`}>
                      <i className={`${spec.icon} d-block text-primary mb-1`}></i>
                      <span className="small text-muted d-block">{spec.label}</span>
                      <span className="fw-bold small">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasGeneralInfo && (
              <div className="card border-0 shadow-sm mb-4 rounded-4 bg-white overflow-hidden">
                <div className="card-header bg-white py-3 border-bottom-0">
                  <h5 className="fw-bold mb-0">Datos Generales</h5>
                </div>
                <div className="card-body p-0">
                  <div className="row g-0">
                    {generalRows.map((row, rowIdx) => (
                      <div key={rowIdx} className="col-md-6">
                        <table className="table table-striped mb-0">
                          <tbody>
                            {row.map((cell, cellIdx) => (
                              hasValue(cell.value) && (
                                <tr key={cellIdx}>
                                  <td className="ps-4 text-muted w-50">{cell.label}:</td>
                                  <td className="fw-bold">{cell.value}</td>
                                </tr>
                              )
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {hasAccessories && (
              <div className="card border-0 shadow-sm mb-4 rounded-4 bg-white">
                <div className="card-header bg-white py-3 border-bottom-0">
                  <h5 className="fw-bold mb-0">Accesorios</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {car.accessories.map((acc, index) => (
                      <div key={index} className="col-md-4 col-6">
                        <div className="d-flex align-items-center small">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {acc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {hasValue(car.description) && (
              <div className="card border-0 shadow-sm p-4 rounded-4 bg-white mb-4">
                <h5 className="fw-bold mb-3">Información Adicional</h5>
                <p className="text-muted mb-0" style={{ lineHeight: '1.8' }}>{car.description}</p>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px', zIndex: 1 }}>
              <div className="card border-0 shadow-lg p-4 mb-4 rounded-4 bg-white border-top border-primary border-5">
                <div className="d-none d-lg-block mb-3">
                  <h1 className="fw-bold h3 mb-2">{car.brand} {car.model} {car.year}</h1>
                  <h2 className="text-primary fw-bold mb-4">{priceFormatted}</h2>
                  {car.status && (
                    <span className={`badge ${isAvailable ? 'bg-success' : 'bg-danger'} mb-2`}>
                      {car.status}
                    </span>
                  )}
                </div>
                
                <div className="d-grid gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg py-3 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-sm">
                    <i className="bi bi-whatsapp fs-5"></i> CONSULTAR POR WHATSAPP
                  </a>
                  <a href="tel:18299823787" className="btn btn-dark btn-lg py-3 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-sm">
                    <i className="bi bi-telephone-fill fs-5"></i> LLAMAR AHORA
                  </a>
                </div>
              </div>

              <div className="card border-0 shadow-sm p-4 mb-4 bg-white rounded-4 border-start border-primary border-5">
                <h5 className="fw-bold mb-3 text-primary"><i className="bi bi-calculator me-2"></i>Financiamiento Disponible</h5>
                <p className="small text-muted mb-4">Aprobación inmediata con las mejores tasas del mercado. Consulta tu plan de pagos personalizado.</p>
                <a href="/financiamiento" className="btn btn-outline-primary w-100 rounded-pill fw-bold py-2">SOLICITAR AHORA</a>
              </div>

              <div className="card border-0 shadow-sm p-4 bg-white rounded-4 border-start border-primary border-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-patch-check-fill text-primary fs-5"></i>
                  </div>
                  <h6 className="fw-bold mb-0">Garantía AEM Autos</h6>
                </div>
                <p className="small text-muted mb-0">Vehículo inspeccionado con certificación AAA+. Garantía de motor y transmisión incluida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;