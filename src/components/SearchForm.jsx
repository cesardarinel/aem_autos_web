import React from 'react';

const SearchForm = () => {
  return (
    <div className="search-form-wrapper">
      <form>
        <div className="row g-3">
          <div className="col-md-3">
            <label className="form-label">Condición del Vehículo*</label>
            <select className="form-select">
              <option>Seleccionar Condición</option>
              <option>Nuevo</option>
              <option>Vehículo Usado</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Seleccionar Color*</label>
            <select className="form-select">
              <option>Seleccionar Color</option>
              <option>Negro</option>
              <option>Blanco</option>
              <option>Rojo</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Seleccionar Marca*</label>
            <select className="form-select">
              <option>Seleccionar Marca</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Audi</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Seleccionar Modelo*</label>
            <select className="form-select">
              <option>Seleccionar Modelo</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-primary w-100" type="submit">
              <i className="bi bi-search me-2"></i> Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;