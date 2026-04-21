import React from 'react';

const LatestCars = () => {
  const cars = [
    {
      id: 1,
      name: 'Jeep Grand Cherokee',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
      year: '2022',
      transmission: 'Automático',
      mileage: '28,500 miles',
      price: '$38,500',
      location: 'Santiago, RD'
    },
    {
      id: 2,
      name: 'Ford F-150 Lariat',
      image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=600&q=80',
      year: '2023',
      transmission: 'V6 EcoBoost',
      mileage: '15,200 miles',
      price: '$52,900',
      location: 'Santiago, RD'
    },
    {
      id: 3,
      name: 'Chevrolet Tahoe',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
      year: '2021',
      transmission: 'V8 Engine',
      mileage: '32,100 miles',
      price: '$45,800',
      location: 'Santiago, RD'
    }
  ];

  return (
    <div className="home6-letest-car-section" id="vehiculos">
      <div className="container">
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="section-title-2">
              <h2>Vehículos Destacados</h2>
              <p>Explora nuestra selección premium de vehículos importados en condiciones excepcionales</p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {cars.map(car => (
            <div key={car.id} className="col-lg-4 col-md-6">
              <div className="product-card4 style-3">
                <div className="product-img">
                  <img 
                    src={car.image} 
                    alt={`Vehículo ${car.name} en venta`} 
                    className="img-fluid" 
                    width="600" 
                    height="400" 
                    loading="lazy" 
                    style={{ height: '250px', objectFit: 'cover', width: '100%' }} 
                  />
                  <div className="number-of-img">
                    <a href="#"><img src="/assets/images/icons/gallery-icon-1.svg" alt="gallery" /> 1</a>
                  </div>
                </div>
                <div className="product-content">
                  <div className="location">
                    <i className="bi bi-geo-alt"></i> {car.location}
                  </div>
                  <h6><a href="#">{car.name} - {car.year}</a></h6>
                  <ul className="features">
                    <li><img src="/assets/images/icons/milage_icon.svg" alt="m" /> {car.mileage}</li>
                    <li><img src="/assets/images/icons/info_icon.svg" alt="i" /> {car.transmission}</li>
                    <li><img src="/assets/images/icons/engine_icon.svg" alt="e" /> Gasolina</li>
                  </ul>
                  <div className="button-and-price">
                    <a className="primary-btn1" href={`https://wa.me/18299951554?text=Me%20interesa%20el%20${car.name}`}>Detalles</a>
                    <div className="price-area">
                      <span>Precio</span>
                      <h6>{car.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-50">
          <a className="primary-btn1 px-5" href="https://www.corotos.com.do/shops/gerson-melvin-auto-import" target="_blank" rel="noreferrer">
            VER CATÁLOGO COMPLETO <i className="bi bi-arrow-right-short ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestCars;
