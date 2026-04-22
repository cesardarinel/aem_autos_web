import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: <i className="bi bi-lightning-charge fs-4 text-primary"></i>,
      title: 'Financiamiento Rápido',
      description: 'Aprobación en menos de 24 horas con procesos simplificados y transparentes.'
    },
    {
      icon: <i className="bi bi-shield-check fs-4 text-primary"></i>,
      title: 'Condiciones AAA+',
      description: 'Todos nuestros vehículos pasan por una inspección rigurosa de 150 puntos.'
    },
    {
      icon: <i className="bi bi-people fs-4 text-primary"></i>,
      title: 'Atención Personalizada',
      description: 'Asesoría experta de principio a fin, adaptada a tus necesidades y presupuesto.'
    },
    {
      icon: <i className="bi bi-file-earmark-check fs-4 text-primary"></i>,
      title: 'Trámites Rápidos',
      description: 'Gestionamos toda la documentación para que recibas tu vehículo sin complicaciones.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Por qué elegirnos</span>
          <h2 className="display-6 fw-bold mt-3 mb-4">Beneficios de comprar en AEM Autos</h2>
        </div>

        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 p-4 border-0 shadow-sm rounded-4 text-center">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-circle flex items-center justify-center mb-4 mx-auto" style={{ width: '60px', height: '60px', display: 'flex' }}>
                  {benefit.icon}
                </div>
                <h3 className="h5 font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted small">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
