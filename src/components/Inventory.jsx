import React from 'react';
import { getContentEntries } from '../lib/api';
import CarCard from './CarCard';

const Inventory = () => {
  const [cars, setCars] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    search: '',
    brand: '',
    year: '',
    minPrice: '',
    maxPrice: ''
  });

  React.useEffect(() => {
    async function loadCars() {
      try {
        const data = await getContentEntries('vehiculo');
        setCars(data);
      } catch (error) {
        console.error('Error loading vehicles:', error);
      } finally {
        setLoading(false);
      }
    }
    loadCars();
  }, []);

  const filteredCars = React.useMemo(() => {
    let result = cars;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(car => 
        (car.name || '').toLowerCase().includes(searchLower) ||
        (car.brand || '').toLowerCase().includes(searchLower)
      );
    }

    if (filters.brand) {
      result = result.filter(car => car.brand === filters.brand);
    }

    if (filters.year) {
      result = result.filter(car => car.year?.toString() === filters.year);
    }

    if (filters.minPrice) {
      const min = parseFloat(filters.minPrice);
      result = result.filter(car => (car.price || 0) >= min);
    }

    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      result = result.filter(car => (car.price || 0) <= max);
    }

    return result;
  }, [cars, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const brands = [...new Set(cars.map(car => car.brand).filter(Boolean))].sort();
  const years = [...new Set(cars.map(car => car.year).filter(Boolean))].sort((a, b) => b - a);

  if (loading) {
    return (
      <div className="inventory-section py-5">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
