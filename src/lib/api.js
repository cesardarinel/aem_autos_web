// Datos estáticos de vehículos enriquecidos para una vista detallada profesional
export const staticVehicles = [
  { 
    id: 1, 
    name: 'Toyota Highlander LE', 
    brand: 'Toyota', 
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80', 
    year: 2022, 
    price: 30500,
    priceCurrency: 'US$',
    location: 'Santiago, RD',
    adNumber: '1596601',
    visits: 557,
    transmission: 'Automática',
    drive: 'AWD',
    fuel: 'Gasolina',
    color: 'Rojo',
    interiorColor: 'Negro',
    engine: '3.5L, 6 cilindros',
    type: 'Jeepeta',
    doors: 5,
    passengers: 7,
    mileage: '25,000 miles',
    financing: {
      monthlyPayment: 'RD$ 28,123',
      downPayment: 'RD$ 681,050'
    },
    accessories: [
      'Bolsa de aire (chofer)', 'Bolsa de aire (laterales)', 'Bolsa de aire (pasajero)', 'Bolsa de aire (traseras)',
      'Frenos ABS', 'Seguros eléctricos', 'Sensores de parqueo', 'Aire acondicionado digital',
      'Aire acondicionado doble', 'Asientos eléctricos', 'Asientos en piel', 'Bluetooth',
      'Calefacción', 'Cámara de reversa', 'Cruise control', 'Guía multifunción',
      'Vidrios eléctricos', 'Versión americana', 'Aros de fábrica'
    ],
    seller: {
      name: 'AEM Autos',
      type: 'Dealer',
      phone1: '(829) 982-3787',
      phone2: '(809) 997-3787',
      whatsapp: '1-809-997-3787'
    },
    description: 'Toyota Highlander LE 2022 en excelente estado. Único dueño, mantenimientos al día en la casa. Versión americana full equipo.'
  },
  { 
    id: 2, 
    name: 'Jeep Grand Cherokee Laredo', 
    brand: 'Jeep', 
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80', 
    year: 2022, 
    price: 38500,
    priceCurrency: 'US$',
    location: 'Santiago, RD',
    adNumber: '1596602',
    visits: 320,
    transmission: 'Automática',
    drive: '4WD',
    fuel: 'Gasolina',
    color: 'Gris Metálico',
    interiorColor: 'Negro',
    engine: '3.6L V6',
    type: 'Jeepeta',
    doors: 5,
    passengers: 5,
    mileage: '28,500 miles',
    financing: {
      monthlyPayment: 'RD$ 35,000',
      downPayment: 'RD$ 850,000'
    },
    accessories: ['Frenos ABS', 'Cámara de reversa', 'Bluetooth', 'Asientos eléctricos', 'Cruise control'],
    seller: {
      name: 'AEM Autos',
      type: 'Dealer',
      whatsapp: '1-809-997-3787'
    },
    description: 'Impecable Jeep Grand Cherokee. Condiciones AAA+.'
  },
  { 
    id: 3, 
    name: 'Ford F-150 Lariat Sport', 
    brand: 'Ford', 
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80', 
    year: 2023, 
    price: 52900,
    priceCurrency: 'US$',
    location: 'Santiago, RD',
    adNumber: '1596603',
    visits: 890,
    transmission: 'Automática',
    drive: '4WD',
    fuel: 'Gasolina',
    color: 'Negro',
    interiorColor: 'Negro',
    engine: '3.5L V6 EcoBoost',
    type: 'Camioneta',
    doors: 4,
    passengers: 5,
    mileage: '15,200 miles',
    financing: {
      monthlyPayment: 'RD$ 48,000',
      downPayment: 'RD$ 1,200,000'
    },
    accessories: ['Techo panorámico', 'Asientos en piel ventilados', 'Apple CarPlay', 'Android Auto', 'Sensores 360'],
    seller: {
      name: 'AEM Autos',
      type: 'Dealer',
      whatsapp: '1-809-997-3787'
    },
    description: 'Ford F-150 Lariat Sport 2023. La más buscada, lista para entrega.'
  }
];

export async function getContentEntries() {
  return staticVehicles;
}

export async function getEntry(contentType, id) {
  return staticVehicles.find(v => v.id.toString() === id.toString());
}

export async function getSiteConfig() {
  return { data: {}, menuItems: [] };
}

export default {
  getEntries: getContentEntries,
  getEntry: getEntry
};
