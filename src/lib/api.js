const API_URL = import.meta.env.PUBLIC_API_URL || 'https://manager.1bits.site/api';
const MEDIA_URL = import.meta.env.PUBLIC_MEDIA_URL || 'https://manager.1bits.site';
const TOKEN = import.meta.env.PUBLIC_TOKEN || 'apLndJqfm3kahZQLTZLCTKUVoRlikGVjgE85NzwtzXZw1oXK4ROQBmWSSGx3op6h';

// Placeholder de alta calidad si la API no tiene imagen
const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80';

function getUrl(value) {
  if (!value) return null;
  
  // Si es un array, tomar el primer elemento (común en galerías)
  let str = Array.isArray(value) ? value[0] : value;
  
  // Si es un objeto, intentar extraer la URL
  if (typeof str === 'object' && str !== null) {
    str = str.url || str.path || str.image || null;
  }

  if (typeof str !== 'string') return null;
  if (str === '') return null;
  
  return str.startsWith('http') ? str : MEDIA_URL + str;
}

function transformVehicle(entry) {
  if (!entry) return null;
  
  const data = entry.data || entry;
  const entryId = entry.id || data.id || 0;
  
  // Búsqueda exhaustiva de imagen en la API
  const imgUrl = getUrl(data.hero_image) || 
                 getUrl(data.gallery) || 
                 getUrl(data.image) || 
                 getUrl(data.thumbnail) || 
                 PLACEHOLDER_IMG;

  const galleryUrl = getUrl(data.gallery) || imgUrl;
  
  let accessories = [];
  let traccion = '';
  let kilometraje = '';
  
  if (data.features) {
    try {
      let feats = data.features;
      if (typeof feats === 'string') {
        feats = feats.replace(/'/g, '\"').replace(/True/gi, 'true').replace(/False/gi, 'false').replace(/\\r|\\n/g, '').replace(/\\/g, '');
        feats = JSON.parse(feats);
      }
      if (typeof feats === 'object' && feats !== null) {
        Object.entries(feats).forEach(([key, val]) => {
          if (key === 'traccion') {
            traccion = val;
          } else if (key === 'kilometraje') {
            kilometraje = val;
          } else if (val === true) {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            accessories.push(label);
          }
        });
      }
    } catch (e) {}
  }
  
  const statusLabel = data.status === 'disponible' ? 'Disponible' : (data.status === 'vendido' ? 'Vendido' : data.status || 'Disponible');
  const name = data.title || data.model || 'Vehículo';
  const autoSlug = name.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
  
  return {
    id: entryId,
    name: name,
    brand: data.brand || '',
    model: data.model || '',
    slug: data.slug || autoSlug,
    sku: data.sku || '',
    year: data.year,
    price: data.price_usd || data.price || 0,
    priceCurrency: 'US$',
    location: 'Santiago, RD',
    image: imgUrl,
    gallery: galleryUrl,
    transmission: data.transmission || 'Automática',
    drive: traccion || 'FWD',
    fuel: data.fuel_type || data.fuel || 'Gasolina',
    color: data.color || '',
    mileage: kilometraje || (data.mileage || ''),
    type: data.type || 'Sedán',
    status: statusLabel,
    statusRaw: data.status || 'disponible',
    description: data.description || '',
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
  if (!response.ok) {
    throw new Error('API Error: ' + response.status);
  }
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
