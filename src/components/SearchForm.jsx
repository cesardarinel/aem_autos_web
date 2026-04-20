import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-form-wrapper" id="financiamiento">
      <div className="section-title text-center mb-4">
        <h2>Solicita Financiamiento</h2>
        <p>Aprobación en menos de 24 horas</p>
      </div>
      <form className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Teléfono</label>
          <input type="tel" className="form-control" placeholder="(829) 000-0000" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Vehículo de interés</label>
          <input type="text" className="form-control" placeholder="Ej: Jeep Grand Cherokee" />
        </div>
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn-primary">Enviar Solicitud</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
