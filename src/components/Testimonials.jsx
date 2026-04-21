import React from 'react';

const Testimonials = () => {
  const reviews = [
    { id: 1, user: 'Juan Pérez', comment: 'Excelente servicio y vehículos en óptimas condiciones. Muy transparentes.', stars: 5 },
    { id: 2, user: 'María García', comment: 'La mejor experiencia comprando mi primer auto importado. Santiago tiene al mejor dealer.', stars: 5 },
    { id: 3, user: 'Carlos Ruiz', comment: 'Calidad AAA+ garantizada. El proceso de financiamiento fue súper rápido.', stars: 5 }
  ];

  return (
    <div className="testimonial-section py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="fw-bold">Lo que dicen nuestros clientes</h2>
            <p className="text-muted">Nuestra reputación se basa en la satisfacción de quienes confían en nosotros.</p>
          </div>
        </div>
        <div className="row g-4">
          {reviews.map(review => (
            <div key={review.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="mb-3">
                  {[...Array(review.stars)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                  ))}
                </div>
                <p className="fst-italic text-muted mb-4">"{review.comment}"</p>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                    <i className="bi bi-person-fill"></i>
                  </div>
                  <h6 className="mb-0 fw-bold">{review.user}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
