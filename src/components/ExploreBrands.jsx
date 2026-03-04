import React from 'react';

const ExploreBrands = () => {
  const brands = [
    { id: 1, name: 'Toyota', count: '14 Vehículos' },
    { id: 2, name: 'BMW', count: '21 Vehículos' },
    { id: 3, name: 'Audi', count: '15 Vehículos' },
    { id: 4, name: 'Mercedes', count: '18 Vehículos' },
    { id: 5, name: 'Ferrari', count: '8 Vehículos' },
    { id: 6, name: 'Hyundai', count: '32 Vehículos' },
  ];

  return (
    <section className="py-5 bg-light-gray mt-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ color: 'var(--primary-blue)' }}>Explorar por Marca</h2>
          <p className="text-muted">Para obtener la información más precisa y actualizada</p>
        </div>
        <div className="row g-4 justify-content-center">
          {brands.map(brand => (
            <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={brand.id}>
              <div className="brand-card card text-center py-4 h-100 border-0 shadow-sm" style={{ cursor: 'pointer' }}>
                <div className="card-body">
                  <div className="brand-icon mb-3" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--primary-blue)' }}>
                    <i className="bi bi-car-front-fill"></i>
                  </div>
                  <h6 className="fw-bold mb-1">{brand.name}</h6>
                  <span className="text-muted small">{brand.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBrands;