const API_URL = 'https://manager.1bits.site/api';
const MEDIA_URL = 'https://manager.1bits.site';
const TOKEN = 'o65jDLV7i4EKViCf7eYEuRwOjYBaR20bHWIGlGMM5MQbCRgjiHWAtpXQJXcGv-bi';

function transformVehicle(entry) {
  const data = entry?.data;
  const entryId = entry?.id || (data && data.id) || 0;
  const img = data?.hero_image || data?.gallery || data?.image || '';
  const imgUrl = img.startsWith('http') ? img : (img ? MEDIA_URL + img : '');
  const galleryImg = data?.gallery || '';
  const galleryUrl = galleryImg.startsWith('http') ? galleryImg : (galleryImg ? MEDIA_URL + galleryImg : '');
  
  let accessories = [];
  let traccion = '';
  let kilometraje = '';
  if (data?.features) {
    try {
      let feats = data.features;
      if (typeof feats === 'string') {
        feats = feats.replace(/'/g, '\"').replace(/True/gi, 'true').replace(/False/gi, 'false').replace(/\\r|\\n/g, '').replace(/\\/g, '');
        feats = JSON.parse(feats);
      }
      if (typeof feats === 'object') {
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
  
  const statusLabel = data?.status === 'disponible' ? 'Disponible' : (data?.status === 'vendido' ? 'Vendido' : data?.status || 'Disponible');
  
  return {
    id: entryId,
    name: data?.title || data?.model || 'Vehículo',
    brand: data?.brand || '',
    model: data?.model || '',
    slug: data?.slug || '',
    sku: data?.sku || '',
    year: data?.year,
    price: data?.price_usd || data?.price || 0,
    priceCurrency: 'US$',
    location: 'Santiago, RD',
    image: imgUrl,
    gallery: galleryUrl,
    transmission: data?.transmission || 'Automática',
    drive: traccion || 'FWD',
    fuel: data?.fuel_type || data?.fuel || 'Gasolina',
    color: data?.color || '',
    mileage: kilometraje || (data?.mileage || ''),
    type: data?.type || 'Sedán',
    status: statusLabel,
    statusRaw: data?.status || 'disponible',
    description: data?.description || '',
    accessories: accessories
  };
}

async function fetchFromAPI(endpoint) {
  const response = await fetch(API_URL + endpoint, {
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
    if (entries && entries.length > 0) {
      return entries.map(function(entry) { return transformVehicle(entry); });
    }
  } catch (e) {
    console.error('API fetch failed:', e.message);
  }
  return [];
}

export async function getEntry(contentType, id) {
  try {
    var entry = await fetchFromAPI('/websites/content/' + contentType + '/entries/' + id + '/');
    return transformVehicle(entry);
  } catch (e) {
    console.log('API fetch failed:', e.message);
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