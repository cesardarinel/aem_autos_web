const API_URL = import.meta.env.PUBLIC_API_URL || 'https://manager.1bits.site/api';
const MEDIA_URL = import.meta.env.PUBLIC_MEDIA_URL || 'https://manager.1bits.site';
const TOKEN = import.meta.env.PUBLIC_TOKEN || 'apLndJqfm3kahZQLTZLCTKUVoRlikGVjgE85NzwtzXZw1oXK4ROQBmWSSGx3op6h';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';

function getUrl(value) {
  if (!value) return null;
  let str = Array.isArray(value) ? value[0] : value;
  if (typeof str === 'object' && str !== null) {
    str = str.url || str.path || str.image || null;
  }
  if (typeof str !== 'string' || str === '') return null;
  return str.startsWith('http') ? str : MEDIA_URL + str;
}

function getGalleryArray(data) {
  const images = [];
  const fields = ['hero_image', 'gallery', 'image', 'thumbnail', 'images', 'fotos'];
  fields.forEach(field => {
    const value = data[field];
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach(item => {
        const url = getUrl(item);
        if (url && !images.includes(url)) images.push(url);
      });
    } else {
      const url = getUrl(value);
      if (url && !images.includes(url)) images.push(url);
    }
  });
  return images.length > 0 ? images : [PLACEHOLDER_IMG];
}

function transformVehicle(entry) {
  if (!entry) return null;
  
  const data = entry.data || entry;
  // LOG CRITICO: Ver qué campos trae la API originalmente
  console.log('DATOS CRUDOS DEL API:', data);
  
  const entryId = entry.id || data.id || 0;
  const gallery = getGalleryArray(data);
  
  // Mapeo ultra-flexible
  const findIn = (keys) => {
    for (const k of keys) {
      if (data[k] && data[k] !== '') return data[k];
    }
    return '';
  };

  let accessories = [];
  let traccion = findIn(['traccion', 'drive', 'drive_train', 'traction']);
  let kilometraje = findIn(['kilometraje', 'mileage', 'miles', 'km']);
  let transmision = findIn(['transmision', 'transmission', 'trans']);
  let combustible = findIn(['combustible', 'fuel_type', 'fuel', 'gas']);
  let color = findIn(['color', 'exterior_color', 'color_exterior']);
  let tipo = findIn(['type', 'tipo', 'body_style', 'estilo']);
  let ano = findIn(['year', 'ano', 'anio', 'model_year']);

  // Procesar características/features
  const featuresField = data.features || data.caracteristicas || data.especificaciones;
  if (featuresField) {
    try {
      let feats = featuresField;
      if (typeof feats === 'string') {
        feats = feats.replace(/'/g, '\"').replace(/True/gi, 'true').replace(/False/gi, 'false').replace(/\\r|\\n/g, '').replace(/\\/g, '');
        feats = JSON.parse(feats);
      }
      if (typeof feats === 'object' && feats !== null) {
        Object.entries(feats).forEach(([key, val]) => {
          const kLower = key.toLowerCase();
          if (kLower.includes('traccion') && !traccion) traccion = val;
          else if (kLower.includes('kilometraje') && !kilometraje) kilometraje = val;
          else if (kLower.includes('transmision') && !transmision) transmision = val;
          else if (val === true || val === 'true') {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            if (!accessories.includes(label)) accessories.push(label);
          }
        });
      }
    } catch (e) {}
  }
  
  const statusLabel = data.status === 'disponible' ? 'Disponible' : (data.status === 'vendido' ? 'Vendido' : data.status || 'Disponible');
  const name = data.title || data.model || 'Vehículo';
  
  return {
    id: entryId,
    name: name,
    brand: data.brand || data.marca || '',
    model: data.model || data.modelo || '',
    slug: data.slug || name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-'),
    sku: data.sku || '',
    year: ano,
    price: data.price_usd || data.price || 0,
    priceCurrency: 'US$',
    location: data.location || 'Santiago, RD',
    image: gallery[0],
    gallery: gallery,
    transmission: transmision || 'N/D',
    drive: traccion || 'N/D',
    fuel: combustible || 'N/D',
    color: color || 'N/D',
    mileage: kilometraje || 'N/D',
    type: tipo || 'Sedán',
    status: statusLabel,
    statusRaw: data.status || 'disponible',
    description: data.description || data.descripcion || '',
    accessories: accessories
  };
}

async function fetchFromAPI(endpoint) {
  const url = API_URL + endpoint;
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) throw new Error('API Error: ' + response.status);
  return response.json();
}

export async function getContentEntries(modelSlug) {
  try {
    const entries = await fetchFromAPI('/websites/content/' + modelSlug + '/entries/');
    if (entries && Array.isArray(entries)) {
      return entries.map(entry => transformVehicle(entry)).filter(Boolean);
    }
  } catch (e) {
    console.error('API fetch failed:', e.message);
  }
  return [];
}

export async function getEntry(contentType, id) {
  try {
    const entry = await fetchFromAPI('/websites/content/' + contentType + '/entries/' + id + '/');
    const item = Array.isArray(entry) ? entry[0] : entry;
    return transformVehicle(item);
  } catch (e) {
    console.error('API fetch failed:', e.message);
  }
  return null;
}

export async function getSiteConfig() {
  try {
    return await fetchFromAPI('/websites/');
  } catch (error) {
    console.error('Error fetching site config:', error.message);
    return { data: {}, menuItems: [] };
  }
}

export default {
  getEntries: getContentEntries,
  getEntry: getEntry,
  getSiteConfig
};
