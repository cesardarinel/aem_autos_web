import React from 'react';
import { staticVehicles } from '../lib/api';
import CarCard from './CarCard';

const Inventory = () => {
  const [filters, setFilters] = React.useState({
    search: '',
    brand: '',
    year: '',
    minPrice: '',
    maxPrice: ''
  });

  // Usamos useMemo para filtrar solo cuando los filtros cambian, evitando cálculos en cada render
  const filteredCars = React.useMemo(() => {
    let result = staticVehicles;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(car => 
        car.name.toLowerCase().includes(searchLower) ||
        car.brand.toLowerCase().includes(searchLower)
      );
    }

    if (filters.brand) {
      result = result.filter(car => car.brand === filters.brand);
    }

    if (filters.year) {
      result = result.filter(car => car.year.toString() === filters.year);
    }

    if (filters.minPrice) {
      const min = parseFloat(filters.minPrice);
      result = result.filter(car => car.price >= min);
    }

    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      result = result.filter(car => car.price <= max);
    }

    return result;
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const brands = [...new Set(staticVehicles.map(car => car.brand))].sort();
  const years = [...new Set(staticVehicles.map(car => car.year))].sort((a, b) => b - a);

  return (
    <div className="inventory-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center mb-5">
            <h1 className="fw-bold display-5">Nuestro Inventario</h1>
            <p className="lead text-muted">Explora nuestra selección de vehículos de alta calidad</p>
          </div>
          
          <div className="col-12">
            <div className="card shadow-sm border-0 p-4 mb-5 bg-light rounded-4">
              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <label className="form-label small fw-bold">Buscar</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                    <input 
                      type="text" 
                      name="search"
                      className="form-control border-start-0" 
                      placeholder="Marca o modelo..." 
                      value={filters.search}
                      onChange={handleFilterChange}
                    />
                  </div>
                </div>
                
                <div className="col-lg-2 col-md-6">
                  <label className="form-label small fw-bold">Marca</label>
                  <select 
                    name="brand"
                    className="form-select" 
                    value={filters.brand}
                    onChange={handleFilterChange}
                  >
                    <option value="">Todas</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className="form-label small fw-bold">Año</label>
                  <select 
                    name="year"
                    className="form-select" 
                    value={filters.year}
                    onChange={handleFilterChange}
                  >
                    <option value="">Todos</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className="form-label small fw-bold">Precio Mín.</label>
                  <input 
                    type="number" 
                    name="minPrice"
                    className="form-control" 
                    placeholder="Desde" 
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="col-lg-2 col-md-6">
                  <label className="form-label small fw-bold">Precio Máx.</label>
                  <input 
                    type="number" 
                    name="maxPrice"
                    className="form-control" 
                    placeholder="Hasta" 
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredCars.length > 0 ? (
            filteredCars.map(car => (
              <div key={car.id} className="col-lg-4 col-md-6">
                <CarCard car={car} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h3>No se encontraron vehículos</h3>
              <p className="text-muted">Intenta ajustar tus filtros de búsqueda.</p>
              <button 
                className="btn btn-primary mt-3 px-4 rounded-pill"
                onClick={() => setFilters({ search: '', brand: '', year: '', minPrice: '', maxPrice: '' })}
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
