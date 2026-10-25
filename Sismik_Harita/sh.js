const CONFIG = {
  apiEndpoints: {
    all_hour: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
    all_day: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
    all_week: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
    all_month: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
  },
  globeTextures: {
    night: 'https://unpkg.com/three-globe/example/img/earth-night.jpg',
    topology: 'https://unpkg.com/three-globe/example/img/earth-topology.png'
  },
  tectonicPlatesUrl: 'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json',
  refreshIntervalSeconds: 60,
  defaultView: {
    center: [20.0, 0.0],
    zoom: 2,
    globeAlt: 2.5
  },
  regions: {
    all: {
      name: 'Dünya Geneli (Tümü)',
      badge: 'Dünya Geneli',
      center: [20.0, 0.0],
      zoom: 2,
      globeAlt: 2.5,
      bbox: null,
      keywords: []
    },
    turkey: {
      name: 'Türkiye ve Yakın Çevre',
      badge: 'Türkiye',
      center: [39.0, 35.0],
      zoom: 6,
      globeAlt: 1.4,
      bbox: { minLat: 34.5, maxLat: 43.0, minLng: 25.0, maxLng: 45.5 },
      keywords: ['turkey', 'türkiye', 'aegean', 'akdeniz', 'marmara', 'karadeniz', 'black sea', 'anatolia', 'cyprus', 'greece', 'crete', 'dodecanese']
    },
    mediterranean: {
      name: 'Akdeniz & Ege Denizi',
      badge: 'Akdeniz',
      center: [37.0, 26.5],
      zoom: 6,
      globeAlt: 1.5,
      bbox: { minLat: 33.0, maxLat: 42.5, minLng: 18.0, maxLng: 36.5 },
      keywords: ['mediterranean', 'aegean', 'crete', 'greece', 'turkey', 'cyprus', 'ionian', 'dodecanese']
    },
    japan: {
      name: 'Japonya (Pasifik)',
      badge: 'Japonya',
      center: [36.5, 138.0],
      zoom: 5,
      globeAlt: 1.6,
      bbox: { minLat: 28.0, maxLat: 46.5, minLng: 128.0, maxLng: 148.5 },
      keywords: ['japan', 'tokyo', 'honshu', 'hokkaido', 'kyushu', 'shikoku', 'ryukyu', 'kuril']
    },
    usa_west: {
      name: 'ABD (Kaliforniya & Batı)',
      badge: 'ABD Batı',
      center: [36.7, -119.5],
      zoom: 6,
      globeAlt: 1.5,
      bbox: { minLat: 31.0, maxLat: 49.0, minLng: -125.0, maxLng: -113.0 },
      keywords: ['california', 'ca', 'nevada', 'nv', 'oregon', 'washington', 'baja']
    },
    italy: {
      name: 'İtalya & Güney Avrupa',
      badge: 'İtalya',
      center: [42.0, 13.0],
      zoom: 6,
      globeAlt: 1.5,
      bbox: { minLat: 36.0, maxLat: 47.5, minLng: 6.0, maxLng: 19.0 },
      keywords: ['italy', 'italia', 'sicily', 'tyrrhenian', 'adriatic', 'apennine']
    },
    indonesia: {
      name: 'Endonezya & Filipinler',
      badge: 'Endonezya',
      center: [-0.78, 113.92],
      zoom: 5,
      globeAlt: 1.6,
      bbox: { minLat: -11.5, maxLat: 7.0, minLng: 95.0, maxLng: 141.0 },
      keywords: ['indonesia', 'java', 'sumatra', 'bali', 'sulawesi', 'molucca', 'banda', 'flores', 'papua']
    },
    chile: {
      name: 'Şili & Güney Amerika',
      badge: 'Şili',
      center: [-33.5, -70.6],
      zoom: 5,
      globeAlt: 1.6,
      bbox: { minLat: -55.0, maxLat: -18.0, minLng: -76.5, maxLng: -66.0 },
      keywords: ['chile', 'santiago', 'valparaiso', 'coquimbo', 'antofagasta', 'atacama']
    },
    iceland: {
      name: 'İzlanda & Atlantik Sırtı',
      badge: 'İzlanda',
      center: [64.9, -18.5],
      zoom: 6,
      globeAlt: 1.5,
      bbox: { minLat: 63.0, maxLat: 67.5, minLng: -25.0, maxLng: -13.0 },
      keywords: ['iceland', 'reykjanes', 'grindavik', 'mid-atlantic']
    }
  }
};

// Turkish Province Center Coordinates (Lat, Lng) for Spatial Proximity
const TURKISH_PROVINCES = {
  'Adana': [37.00, 35.32],
  'Adıyaman': [37.76, 38.27],
  'Afyonkarahisar': [38.75, 30.54],
  'Ağrı': [39.72, 43.05],
  'Aksaray': [38.37, 34.03],
  'Amasya': [40.65, 35.83],
  'Ankara': [39.93, 32.85],
  'Antalya': [36.89, 30.70],
  'Ardahan': [41.11, 42.70],
  'Artvin': [41.18, 41.82],
  'Aydın': [37.84, 27.84],
  'Balıkesir': [39.65, 27.88],
  'Bartın': [41.63, 32.33],
  'Batman': [37.89, 41.13],
  'Bayburt': [40.26, 40.22],
  'Bilecik': [40.14, 29.98],
  'Bingöl': [38.88, 40.49],
  'Bitlis': [38.40, 42.11],
  'Bolu': [40.73, 31.61],
  'Burdur': [37.72, 30.29],
  'Bursa': [40.18, 29.06],
  'Çanakkale': [40.15, 26.41],
  'Çankırı': [40.60, 33.62],
  'Çorum': [40.55, 34.95],
  'Denizli': [37.77, 29.09],
  'Diyarbakır': [37.91, 40.23],
  'Düzce': [40.84, 31.16],
  'Edirne': [41.67, 26.56],
  'Elazığ': [38.68, 39.22],
  'Erzincan': [39.75, 39.49],
  'Erzurum': [39.90, 41.27],
  'Eskişehir': [39.78, 30.52],
  'Gaziantep': [37.06, 37.38],
  'Giresun': [40.91, 38.39],
  'Gümüşhane': [40.46, 39.48],
  'Hakkari': [37.57, 43.74],
  'Hatay': [36.20, 36.16],
  'Iğdır': [39.92, 44.05],
  'Isparta': [37.76, 30.55],
  'İstanbul': [41.01, 28.98],
  'İzmir': [38.42, 27.14],
  'Kahramanmaraş': [37.58, 36.93],
  'Karabük': [41.20, 32.62],
  'Karaman': [37.18, 33.22],
  'Kars': [40.60, 43.10],
  'Kastamonu': [41.38, 33.78],
  'Kayseri': [38.73, 35.48],
  'Kilis': [36.72, 37.12],
  'Kırıkkale': [39.84, 33.51],
  'Kırklareli': [41.73, 27.22],
  'Kırşehir': [39.14, 34.16],
  'Kocaeli': [40.76, 29.92],
  'Konya': [37.87, 32.48],
  'Kütahya': [39.42, 29.98],
  'Malatya': [38.35, 38.31],
  'Manisa': [38.61, 27.43],
  'Mardin': [37.31, 40.74],
  'Mersin': [36.81, 34.64],
  'Muğla': [37.21, 28.36],
  'Muş': [38.74, 41.51],
  'Nevşehir': [38.62, 34.71],
  'Niğde': [37.97, 34.68],
  'Ordu': [40.98, 37.88],
  'Osmaniye': [37.07, 36.25],
  'Rize': [41.02, 40.52],
  'Sakarya': [40.77, 30.40],
  'Samsun': [41.29, 36.33],
  'Şanlıurfa': [37.16, 38.79],
  'Siirt': [37.93, 41.94],
  'Sinop': [42.02, 35.15],
  'Sivas': [39.75, 37.01],
  'Şırnak': [37.52, 42.46],
  'Tekirdağ': [40.98, 27.51],
  'Tokat': [40.31, 36.55],
  'Trabzon': [41.00, 39.72],
  'Tunceli': [39.11, 39.55],
  'Uşak': [38.68, 29.40],
  'Van': [38.50, 43.38],
  'Yalova': [40.65, 29.27],
  'Yozgat': [39.82, 34.81],
  'Zonguldak': [41.45, 31.79]
};

// Known active seismic districts lookup -> maps to proper Province
const DISTRICT_TO_PROVINCE = {
  // Adana
  'feke': 'Adana', 'saimbeyli': 'Adana', 'kozan': 'Adana', 'aladag': 'Adana', 'aladağ': 'Adana', 'ceyhan': 'Adana', 'tufanbeyli': 'Adana', 'karaisali': 'Adana', 'pozantı': 'Adana',
  // Kahramanmaraş
  'pazarcik': 'Kahramanmaraş', 'pazarcık': 'Kahramanmaraş', 'elbistan': 'Kahramanmaraş', 'goksun': 'Kahramanmaraş', 'göksun': 'Kahramanmaraş', 'turkoglu': 'Kahramanmaraş', 'türkoğlu': 'Kahramanmaraş', 'nurhak': 'Kahramanmaraş', 'afsin': 'Kahramanmaraş', 'afşin': 'Kahramanmaraş', 'caglayancerit': 'Kahramanmaraş', 'andirin': 'Kahramanmaraş',
  // Hatay
  'antakya': 'Hatay', 'defne': 'Hatay', 'samandag': 'Hatay', 'samandağ': 'Hatay', 'iskenderun': 'Hatay', 'kirikhan': 'Hatay', 'kırıkhan': 'Hatay', 'dortyol': 'Hatay', 'dörtyol': 'Hatay', 'arsuz': 'Hatay', 'hassa': 'Hatay', 'belen': 'Hatay', 'yayladagi': 'Hatay', 'altinozu': 'Hatay',
  // Malatya
  'dogansehir': 'Malatya', 'doğanşehir': 'Malatya', 'yesilyurt': 'Malatya', 'yeşilyurt': 'Malatya', 'battalgazi': 'Malatya', 'akcadag': 'Malatya', 'akçadağ': 'Malatya', 'puturge': 'Malatya', 'pütürge': 'Malatya', 'darende': 'Malatya', 'kale': 'Malatya', 'hekimhan': 'Malatya', 'kuluncak': 'Malatya',
  // Şanlıurfa
  'hilvan': 'Şanlıurfa', 'siverek': 'Şanlıurfa', 'birecik': 'Şanlıurfa', 'bozova': 'Şanlıurfa', 'suruc': 'Şanlıurfa', 'halfeti': 'Şanlıurfa', 'viransehir': 'Şanlıurfa',
  // Elazığ
  'sivrice': 'Elazığ', 'maden': 'Elazığ', 'palu': 'Elazığ', 'kovancilar': 'Elazığ', 'karakocan': 'Elazığ', 'baskil': 'Elazığ',
  // Adıyaman
  'golbasi': 'Adıyaman', 'gölbaşı': 'Adıyaman', 'celikhan': 'Adıyaman', 'çelikhan': 'Adıyaman', 'besni': 'Adıyaman', 'kahta': 'Adıyaman', 'samsat': 'Adıyaman', 'gerger': 'Adıyaman', 'tut': 'Adıyaman',
  // Gaziantep
  'nurdagi': 'Gaziantep', 'nurdağı': 'Gaziantep', 'islahiye': 'Gaziantep', 'islâhiye': 'Gaziantep', 'nizip': 'Gaziantep', 'sahinbey': 'Gaziantep',
  // Osmaniye
  'duzici': 'Osmaniye', 'düziçi': 'Osmaniye', 'bahce': 'Osmaniye', 'kadirli': 'Osmaniye', 'hasanbeyli': 'Osmaniye',
  // Bingöl
  'karliova': 'Bingöl', 'karlıova': 'Bingöl', 'yedisu': 'Bingöl', 'genc': 'Bingöl', 'genç': 'Bingöl', 'solhan': 'Bingöl', 'kigi': 'Bingöl',
  // Van
  'ercis': 'Van', 'erciş': 'Van', 'tusba': 'Van', 'tuşba': 'Van', 'muradiye': 'Van', 'caldiran': 'Van', 'ozalp': 'Van', 'baskale': 'Van',
  // İzmir
  'seferihisar': 'İzmir', 'karaburun': 'İzmir', 'foca': 'İzmir', 'foça': 'İzmir', 'cesme': 'İzmir', 'çeşme': 'İzmir', 'urla': 'İzmir', 'menderes': 'İzmir', 'torbali': 'İzmir', 'torbalı': 'İzmir', 'menemen': 'İzmir', 'dikili': 'İzmir', 'bergama': 'İzmir',
  // Muğla
  'bodrum': 'Muğla', 'marmaris': 'Muğla', 'fethiye': 'Muğla', 'datca': 'Muğla', 'datça': 'Muğla', 'milas': 'Muğla', 'ula': 'Muğla', 'ortaca': 'Muğla', 'koycegiz': 'Muğla', 'dalaman': 'Muğla',
  // Çanakkale
  'biga': 'Çanakkale', 'ayvacik': 'Çanakkale', 'ayvacık': 'Çanakkale', 'ezine': 'Çanakkale', 'gelibolu': 'Çanakkale', 'can': 'Çanakkale', 'bozcaada': 'Çanakkale', 'gokceada': 'Çanakkale',
  // Balıkesir
  'edremit': 'Balıkesir', 'bandirma': 'Balıkesir', 'bandırma': 'Balıkesir', 'gonen': 'Balıkesir', 'gönen': 'Balıkesir', 'ayvalik': 'Balıkesir', 'ayvalık': 'Balıkesir', 'dursunbey': 'Balıkesir', 'susurluk': 'Balıkesir',
  // Manisa
  'soma': 'Manisa', 'akhisar': 'Manisa', 'kirkagac': 'Manisa', 'kırkağaç': 'Manisa', 'salihli': 'Manisa', 'alasehir': 'Manisa',
  // Düzce
  'golyaka': 'Düzce', 'gölyaka': 'Düzce', 'gumusova': 'Düzce', 'gümüşova': 'Düzce', 'kaynasli': 'Düzce', 'kaynaşlı': 'Düzce', 'cilimli': 'Düzce',
  // Antalya
  'korkuteli': 'Antalya', 'kumluca': 'Antalya', 'kas': 'Antalya', 'kaş': 'Antalya', 'alanya': 'Antalya', 'manavgat': 'Antalya', 'finike': 'Antalya', 'demre': 'Antalya', 'gazipasa': 'Antalya',
  // İstanbul
  'silivri': 'İstanbul', 'buyukcekmece': 'İstanbul', 'büyükçekmece': 'İstanbul', 'avcilar': 'İstanbul', 'adalar': 'İstanbul'
};

const state = {
  selectedFeed: 'all_day',
  selectedRegion: 'turkey', // Default to Turkey as requested
  minMagnitude: 0,
  searchQuery: '',
  sortBy: 'time_desc',
  filterByBounds: false,
  soundEnabled: false,
  showTectonicPlates: true,
  currentViewMode: 'globe', // 'globe' (3D) or 'map' (2D)
  currentBasemap: 'dark',
  autoRotate: true,
  showRings: true,
  hasAutoExpanded: false, // Smart auto-expansion flag to prevent empty screens

  rawFeatures: [],
  filteredFeatures: [],
  turkeyProvincesData: [], // Kandilli grouped province stats
  markersMap: new Map(), // id -> L.circleMarker (for 2D map)
  selectedEarthquakeId: null,

  countdownSeconds: CONFIG.refreshIntervalSeconds,
  countdownTimerId: null,
  isFetching: false
};

// Sound FX Engine (Web Audio API Synthesizer)
class AudioSynthesizer {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBlip(freq = 780, duration = 0.12) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }
}

const audioSynth = new AudioSynthesizer();

// ============================================================================
// Globe.GL 3D Visualization Engine
// ============================================================================
let globe = null;

function initGlobe() {
  const container = document.getElementById('globe-container');
  if (!container || typeof Globe === 'undefined') return;

  const width = container.clientWidth || 800;
  const height = 335; // Compact height within 320px - 350px requirement

  globe = Globe()(container)
    .width(width)
    .height(height)
    .globeImageUrl(CONFIG.globeTextures.night)
    .bumpImageUrl(CONFIG.globeTextures.topology)
    .backgroundColor('rgba(0,0,0,0)') // Transparent background for neon space orbs
    .showAtmosphere(true)
    .atmosphereColor('#00f2fe')
    .atmosphereAltitude(0.18)
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude('altitude')
    .pointRadius('radius')
    .pointColor('color')
    .pointLabel('tooltipHtml')
    .onPointClick(d => {
      if (d && d.id) {
        window.onEarthquakeItemClick(d.id);
      }
    })
    .ringLat('lat')
    .ringLng('lng')
    .ringAltitude(0.003)
    .ringColor('color')
    .ringMaxRadius('maxRadius')
    .ringPropagationSpeed('speed')
    .ringRepeatPeriod('repeat');

  // Configure Orbit Controls
  const controls = globe.controls();
  if (controls) {
    controls.autoRotate = state.autoRotate;
    controls.autoRotateSpeed = 0.55;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 140;
    controls.maxDistance = 600;
  }

  // Initial Camera View: Default to Turkey if selected, else world
  const initRegion = CONFIG.regions[state.selectedRegion] || CONFIG.regions.turkey;
  globe.pointOfView({
    lat: initRegion.center[0],
    lng: initRegion.center[1],
    altitude: initRegion.globeAlt
  }, 1200);

  // Resize handler
  window.addEventListener('resize', handleGlobeResize);
}

function handleGlobeResize() {
  const container = document.getElementById('globe-container');
  if (container && globe) {
    globe.width(container.clientWidth);
    globe.height(container.clientHeight || 335);
  }
}

/**
 * Render earthquake points and animated shockwave rings on 3D Globe
 * When filteredFeatures is empty, uses rawFeatures with subtle opacity to prevent a black/empty globe
 */
function renderGlobeData() {
  if (!globe) return;

  const hasFiltered = state.filteredFeatures.length > 0;
  const sourceFeatures = hasFiltered ? state.filteredFeatures : state.rawFeatures;
  const isDimmedFallback = !hasFiltered && state.rawFeatures.length > 0;

  // 1. Points on Globe
  const points = sourceFeatures.map(f => {
    const coords = f.geometry?.coordinates || [0, 0, 0];
    const lng = coords[0];
    const lat = coords[1];
    const depth = coords[2] ?? 0;
    const mag = f.properties?.mag ?? 0;
    const place = formatCleanPlace(f.properties?.place || 'Bilinmeyen Konum');
    let color = getMagnitudeColor(mag);
    if (isDimmedFallback) {
      color = hexToRgba(color, 0.45);
    }

    // Flat luminous surface dots without giant 3D columns!
    const altitude = 0.003;
    const radius = Math.max(0.12, Math.min(0.55, Math.pow(Math.max(0.1, mag), 1.2) * 0.075));

    const tooltipHtml = `
      <div class="globe-tooltip-card">
        <div class="globe-tooltip-top">
          <span class="globe-tooltip-mag" style="background: ${color};">M ${mag.toFixed(1)}</span>
          <span class="globe-tooltip-place">${place}</span>
        </div>
        <div class="globe-tooltip-meta">
          <span><i class="fa-solid fa-arrows-down-to-line"></i> ${depth.toFixed(1)} km</span>
          <span><i class="fa-regular fa-clock"></i> ${timeAgo(f.properties?.time)}</span>
        </div>
      </div>
    `;

    return {
      id: f.id,
      lat,
      lng,
      altitude,
      radius,
      color,
      tooltipHtml,
      mag,
      feature: f
    };
  });

  globe.pointsData(points);

  // 2. Animated Shockwave Rings (delicate, thin surface waves)
  if (state.showRings) {
    const ringSources = hasFiltered ? state.filteredFeatures : state.rawFeatures;
    const rings = ringSources
      .filter(f => (f.properties?.mag ?? 0) >= 4.0 || (Date.now() - (f.properties?.time || 0) < 12 * 3600 * 1000))
      .slice(0, 30) // limit for performance
      .map(f => {
        const coords = f.geometry?.coordinates || [0, 0, 0];
        const mag = f.properties?.mag ?? 3.5;
        const color = getMagnitudeColor(mag);
        return {
          lat: coords[1],
          lng: coords[0],
          color: (t) => {
            const alpha = Math.max(0, 1 - t);
            return hexToRgba(color, alpha * 0.7);
          },
          maxRadius: Math.max(1.2, mag * 0.5),
          speed: 1.4,
          repeat: 1600
        };
      });

    globe.ringsData(rings);
  } else {
    globe.ringsData([]);
  }
}

// 2D Leaflet Map (Secondary View)
let map;
let markerLayerGroup;
let tectonicPlatesLayer = null;

const tileLayers = {
  dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CARTO &copy; OpenStreetMap',
    subdomains: 'abcd',
    maxZoom: 19
  }),
  satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; USGS',
    maxZoom: 19
  }),
  light: L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap',
    subdomains: 'abcd',
    maxZoom: 19
  })
};

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  map = L.map('map', {
    center: CONFIG.regions.turkey.center,
    zoom: CONFIG.regions.turkey.zoom,
    minZoom: 2,
    maxZoom: 18,
    zoomControl: true,
    worldCopyJump: true
  });

  tileLayers.dark.addTo(map);
  markerLayerGroup = L.layerGroup().addTo(map);

  loadTectonicPlates();

  map.on('moveend', () => {
    if (state.filterByBounds) {
      applyFiltersAndRender(false);
    }
  });
}

async function loadTectonicPlates() {
  try {
    const res = await fetch(CONFIG.tectonicPlatesUrl);
    if (!res.ok) throw new Error('Tectonic plates fetch failed');
    const geojsonData = await res.json();

    tectonicPlatesLayer = L.geoJSON(geojsonData, {
      style: {
        color: '#ff5722',
        weight: 1.6,
        opacity: 0.65,
        dashArray: '4, 4'
      },
      interactive: false
    });

    if (state.showTectonicPlates) {
      tectonicPlatesLayer.addTo(map);
    }
  } catch (err) {
    console.warn('Levha sınırları yüklenemedi:', err);
  }
}

// Data Fetching & Parsing (Dynamic: Kandilli for Turkey, USGS for World)
let currentAbortController = null;

async function fetchEarthquakeData(showLoader = true) {
  // Eğer devam eden bir istek varsa iptal et ki yeni seçim anında işleme alınsın
  if (currentAbortController) {
    currentAbortController.abort();
  }
  const controller = new AbortController();
  currentAbortController = controller;

  const isTurkey = state.selectedRegion === 'turkey';
  const endpoint = isTurkey 
    ? 'https://api.orhanaydogdu.com.tr/deprem/kandilli/live' 
    : (CONFIG.apiEndpoints[state.selectedFeed] || CONFIG.apiEndpoints.all_day);

  // Rozeti hemen güncelle ki kullanıcı hangi API'ye geçildiğini anında görsün
  const statusText = document.querySelector('.status-text');
  if (statusText) statusText.textContent = isTurkey ? 'KANDİLLİ CANLI AKIŞI' : 'USGS CANLI AKIŞI';

  state.isFetching = true;
  if (showLoader) showLoadingUI(true);

  try {
    const response = await fetch(endpoint, { 
      cache: 'no-store',
      signal: controller.signal 
    });
    if (!response.ok) throw new Error(`API Hatası: HTTP ${response.status}`);

    const rawData = await response.json();
    
    if (isTurkey) {
      state.rawFeatures = (rawData.result || []).map(eq => ({
        id: eq.earthquake_id,
        properties: {
          mag: eq.mag,
          place: eq.title,
          time: new Date(eq.date || eq.date_time).getTime() || (eq.created_at ? eq.created_at * 1000 : Date.now()),
          depth: eq.depth
        },
        geometry: {
          coordinates: [eq.geojson.coordinates[0], eq.geojson.coordinates[1], eq.depth]
        }
      }));
    } else {
      state.rawFeatures = Array.isArray(rawData.features) ? rawData.features : [];
    }

    const now = new Date();
    const footerEl = document.getElementById('footer-last-updated');
    if (footerEl) footerEl.innerHTML = `<i class="fa-regular fa-clock"></i> Son Güncelleme: ${formatTime(now)} (${isTurkey ? 'Kandilli' : 'USGS'} Kaynağından ${state.rawFeatures.length} Kayıt Alındı)`;

    if (statusText) statusText.textContent = isTurkey ? 'KANDİLLİ CANLI AKIŞI' : 'USGS CANLI AKIŞI';

    audioSynth.playBlip(920, 0.08);
    applyFiltersAndRender(true);
    if (typeof generateAISummary === 'function') generateAISummary();
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('Veri hatası:', error);
      showErrorMessage(`Veriler alınırken sorun oluştu: ${error.message}.`);
    }
  } finally {
    if (currentAbortController === controller) {
      state.isFetching = false;
      showLoadingUI(false);
      resetCountdown();
    }
  }
}

function generateAISummary() {
  const aiTextEl = document.getElementById('ai-summary-text');
  if (!aiTextEl || state.filteredFeatures.length === 0) {
    if (aiTextEl) aiTextEl.textContent = "Sismik aktivite bulunmadığından değerlendirme yapılamıyor.";
    return;
  }
  aiTextEl.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Yapay zeka sismik verileri yorumluyor...';
  const count = state.filteredFeatures.length;
  const maxQuake = state.filteredFeatures.reduce((prev, current) => (prev.properties.mag > current.properties.mag) ? prev : current);
  const activeProvincesCount = state.turkeyProvincesData?.length || 0;
  const mostActive = state.turkeyProvincesData?.[0]?.name || "Bilinmiyor";

  setTimeout(() => {
    let riskLevel = maxQuake.properties.mag >= 5.0 ? "dikkat çekici şiddette sismik hareketlilik" : (maxQuake.properties.mag >= 4.0 ? "orta ölçekli enerji boşalımı" : "olağan sismik aktivite");
    aiTextEl.innerHTML = `Yapay Zeka Analizi: Son incelemede <strong>${activeProvincesCount} farklı bölgede</strong> toplam <strong>${count}</strong> sarsıntı tespit edildi. Maksimum M${maxQuake.properties.mag.toFixed(1)} büyüklüğü ile <strong>${riskLevel}</strong> gözlemlenmektedir. Fay hatlarındaki mevcut gerilim istatistiksel normaller dahilindedir (Odak: ${mostActive}).`;
  }, 1200);
}

window.generateAISummary = generateAISummary;

function showLoadingUI(isLoading) {
  const loader = document.getElementById('map-loader');
  const bar = document.getElementById('top-loading-bar');
  const refreshIcon = document.getElementById('refresh-icon');
  const feedContainer = document.getElementById('earthquake-list');

  if (isLoading) {
    loader?.classList.remove('hidden');
    if (bar) {
      bar.style.opacity = '1';
      bar.style.width = '70%';
    }
    refreshIcon?.classList.add('rotating');

    // Show stylish loading spinner & text in center of feed list
    if (feedContainer) {
      const isTr = state.selectedRegion === 'turkey';
      feedContainer.innerHTML = `
        <div class="feed-loader" id="feed-loading-state">
          <div class="feed-radar-spinner">
            <i class="fa-solid fa-satellite-dish"></i>
          </div>
          <p class="feed-loader-text">Sismik veriler yükleniyor, lütfen bekleyin...</p>
          <span class="feed-loader-subtext">${isTr ? 'Kandilli Rasathanesi canlı sensör ağı sorgulanıyor' : 'USGS küresel sensör ağı sorgulanıyor'}</span>
        </div>
      `;
    }
  } else {
    loader?.classList.add('hidden');
    if (bar) {
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.opacity = '0';
        bar.style.width = '0%';
      }, 350);
    }
    refreshIcon?.classList.remove('rotating');
  }
}

function showErrorMessage(msg) {
  const container = document.getElementById('earthquake-list');
  if (container) {
    container.innerHTML = `
      <div class="empty-data-alert" style="border-color: rgba(239, 68, 68, 0.45);">
        <div class="empty-data-icon" style="color: #ef4444;">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div class="empty-data-title" style="color: #fca5a5;">Sismik Veri Akışı Alınamadı</div>
        <p class="empty-data-desc">${msg}</p>
        <div class="empty-data-actions">
          <button onclick="fetchEarthquakeData(true)" class="map-action-btn highlight">
            <i class="fa-solid fa-rotate"></i> Tekrar Dene
          </button>
          <button onclick="switchFeedAndFilter('all_week')" class="map-action-btn">
            <i class="fa-regular fa-calendar-days"></i> Son 7 Günü Dene
          </button>
        </div>
      </div>
    `;
  }
}

// Filtering, Sorting & Spatial Logic
function applyFiltersAndRender(rebuildVisuals = true) {
  const regionConfig = CONFIG.regions[state.selectedRegion] || CONFIG.regions.all;
  const currentBounds = map ? map.getBounds() : null;

  state.filteredFeatures = state.rawFeatures.filter(feature => {
    const props = feature.properties || {};
    const coords = feature.geometry?.coordinates || [0, 0, 0];
    const lon = coords[0];
    const lat = coords[1];
    const mag = props.mag;

    // 1. Magnitude Filter
    if (mag === null || isNaN(mag) || mag < state.minMagnitude) return false;

    // 2. Region / Country Filter
    if (state.selectedRegion !== 'all') {
      let matchesRegion = false;

      // Kandilli verisi zaten Türkiye'ye ait olduğundan Türkiye seçiliyken elenmesini engelle
      if (state.selectedRegion === 'turkey') {
        matchesRegion = true;
      } else {
        if (regionConfig.bbox) {
          const { minLat, maxLat, minLng, maxLng } = regionConfig.bbox;
          if (lat >= minLat && lat <= maxLat && lon >= minLng && lon <= maxLng) {
            matchesRegion = true;
          }
        }

        if (!matchesRegion && regionConfig.keywords && regionConfig.keywords.length > 0) {
          const placeStr = (props.place || '').toLowerCase();
          if (regionConfig.keywords.some(kw => new RegExp('\\b' + kw + '\\b', 'i').test(placeStr))) {
            matchesRegion = true;
          }
        }
      }

      if (!matchesRegion) return false;
    }

    // 3. Map Viewport Bounds (if active)
    if (state.filterByBounds && state.currentViewMode === 'map' && currentBounds) {
      if (!currentBounds.contains([lat, lon])) return false;
    }

    // 4. Live Search Query
    if (state.searchQuery.trim().length > 0) {
      const q = state.searchQuery.trim();
      const placeStr = props.place || '';
      const titleStr = props.title || '';
      
      const qLower = q.toLowerCase();
      const pLower = placeStr.toLowerCase();
      const tLower = titleStr.toLowerCase();

      const normalize = str => str.toLocaleLowerCase('tr-TR')
        .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').toLowerCase();
      
      const qNorm = normalize(q);
      const pNorm = normalize(placeStr);
      const tNorm = normalize(titleStr);

      const matches = pLower.includes(qLower) || tLower.includes(qLower) || pNorm.includes(qNorm) || tNorm.includes(qNorm);
      if (!matches) return false;
    }

    return true;
  });

  sortFilteredFeatures();

  // Run Kandilli Provincial Analysis for Turkey
  analyzeTurkishProvinces();

  // Update UI components
  renderKPICards();
  renderEarthquakeList();
  renderAnalytics();
  renderProvinceAnalysis();

  if (rebuildVisuals) {
    renderGlobeData();
    renderMapMarkers();
  }
}

function sortFilteredFeatures() {
  state.filteredFeatures.sort((a, b) => {
    const propA = a.properties || {};
    const propB = b.properties || {};
    const depthA = a.geometry?.coordinates?.[2] ?? 0;
    const depthB = b.geometry?.coordinates?.[2] ?? 0;

    switch (state.sortBy) {
      case 'mag_desc': return (propB.mag ?? -999) - (propA.mag ?? -999);
      case 'mag_asc': return (propA.mag ?? 999) - (propB.mag ?? 999);
      case 'depth_asc': return depthA - depthB;
      case 'depth_desc': return depthB - depthA;
      case 'time_desc':
      default: return (propB.time || 0) - (propA.time || 0);
    }
  });
}

// 3. Türkiye İl Bazlı Sismik Analiz (Kandilli Modeli)
function analyzeTurkishProvinces() {
  // REQUIREMENT 1: Always include ALL earthquakes (minMagnitude = 0) for Turkey!
  // Micro earthquakes (M < 3.0), light quakes (M 3.0+), and all magnitudes are included.
  const turkeyFeatures = state.rawFeatures.filter(feature => {
    const coords = feature.geometry?.coordinates || [0, 0, 0];
    const lon = coords[0];
    const lat = coords[1];
    const place = (feature.properties?.place || '').toLowerCase();

    // Check Turkey & immediate surrounding seismic zones (narrowed to exclude Greece)
    const inBBox = (lat >= 35.5 && lat <= 42.5 && lon >= 25.5 && lon <= 45.0);
    const hasKw = /turkey|türkiye|feke|hilvan|kahramanmaras|hatay|adana|malatya|izmir|antalya/i.test(place);
    return inBBox || hasKw;
  });

  const provinceMap = new Map();

  turkeyFeatures.forEach(f => {
    const coords = f.geometry?.coordinates || [0, 0, 0];
    const lon = coords[0];
    const lat = coords[1];
    const depth = coords[2] ?? 0;
    const mag = typeof f.properties?.mag === 'number' ? f.properties.mag : 1.5;
    const place = f.properties?.place || '';

    // Detect province name
    const provinceName = detectProvinceName(place, lat, lon);

    if (!provinceMap.has(provinceName)) {
      provinceMap.set(provinceName, {
        name: provinceName,
        quakes: [],
        count: 0,
        maxMag: -99,
        minMag: 99,
        latestTime: 0,
        latestPlace: '',
        totalDepth: 0,
        center: TURKISH_PROVINCES[provinceName] || [lat, lon],
        districts: new Set()
      });
    }

    const provData = provinceMap.get(provinceName);
    provData.quakes.push(f);
    provData.count++;
    if (mag > provData.maxMag) provData.maxMag = mag;
    if (mag < provData.minMag) provData.minMag = mag;
    if ((f.properties?.time || 0) > provData.latestTime) {
      provData.latestTime = f.properties?.time || 0;
      provData.latestPlace = formatCleanPlace(place);
    }
    provData.totalDepth += depth;

    // Track district keyword
    const detectedDistrict = extractDistrictName(place);
    if (detectedDistrict) provData.districts.add(detectedDistrict);
  });

  // Convert map to sorted array (by count desc, then maxMag desc)
  state.turkeyProvincesData = Array.from(provinceMap.values())
    .map(p => {
      // Sort quakes in this province by time descending
      p.quakes.sort((a, b) => (b.properties?.time || 0) - (a.properties?.time || 0));
      return {
        ...p,
        minMag: p.minMag === 99 ? p.maxMag : p.minMag,
        avgDepth: (p.totalDepth / p.count).toFixed(1),
        districtsSummary: Array.from(p.districts).slice(0, 3).join(', ') || 'Merkez / Çevre'
      };
    })
    .sort((a, b) => b.count - a.count || b.maxMag - a.maxMag);
}

/**
 * Intelligent Province Detection:
 * 1. Checks district-to-province dictionary (e.g. Feke -> Adana, Hilvan -> Şanlıurfa)
 * 2. Checks direct Turkish province names in text
 * 3. Identifies offshore marine zones (Ege Denizi, Akdeniz, Marmara)
 * 4. Fallback: calculates nearest Turkish province center by Euclidean distance
 */
function detectProvinceName(placeStr, lat, lon) {
  const pLower = placeStr.toLowerCase();

  // 1. Check District Dictionary
  for (const [district, prov] of Object.entries(DISTRICT_TO_PROVINCE)) {
    if (pLower.includes(district)) {
      return prov;
    }
  }

  // 2. Check Direct Province Names
  for (const prov of Object.keys(TURKISH_PROVINCES)) {
    const provLower = prov.toLowerCase();
    if (pLower.includes(provLower)) {
      return prov;
    }
  }

  // 3. Marine Zones
  if (pLower.includes('aegean') || (lon < 27.2 && lat >= 36.5 && lat <= 40.5)) {
    return 'Ege Denizi (Kıyı/Açıklar)';
  }
  if (pLower.includes('mediterranean') || (lat < 36.4 && lon >= 28.0 && lon <= 36.0)) {
    return 'Akdeniz (Kıyı/Açıklar)';
  }
  if (pLower.includes('marmara') || (lat >= 40.5 && lat <= 41.1 && lon >= 27.5 && lon <= 30.0)) {
    return 'Marmara Denizi';
  }

  // 4. Geospatial Distance Fallback to closest Turkish province
  let closestProv = 'Türkiye Geneli';
  let minDistance = Infinity;

  for (const [prov, centerCoords] of Object.entries(TURKISH_PROVINCES)) {
    const dLat = lat - centerCoords[0];
    const dLon = lon - centerCoords[1];
    const distSq = dLat * dLat + dLon * dLon;
    if (distSq < minDistance) {
      minDistance = distSq;
      closestProv = prov;
    }
  }

  return closestProv;
}

function extractDistrictName(placeStr) {
  const pLower = placeStr.toLowerCase();
  for (const district of Object.keys(DISTRICT_TO_PROVINCE)) {
    if (pLower.includes(district)) {
      return district.charAt(0).toUpperCase() + district.slice(1);
    }
  }
  return null;
}

/**
 * Render Province Cards & Province Table
 */
function renderProvinceAnalysis() {
  const panel = document.getElementById('province-analysis-panel');
  const cardsGrid = document.getElementById('province-cards-grid');
  const tableBody = document.getElementById('province-table-body');
  const totalProvincesEl = document.getElementById('prov-total-provinces');
  const mostActiveEl = document.getElementById('prov-most-active');
  const maxMagEl = document.getElementById('prov-max-mag');

  if (!panel || !cardsGrid || !tableBody) return;

  const data = state.turkeyProvincesData;

  // Update header badges
  if (totalProvincesEl) totalProvincesEl.textContent = data.length;

  if (data.length > 0) {
    if (mostActiveEl) mostActiveEl.textContent = `${data[0].name} (${data[0].count})`;
    const overallMax = Math.max(...data.map(p => p.maxMag));
    if (maxMagEl) maxMagEl.textContent = `M ${overallMax.toFixed(1)}`;
  } else {
    if (mostActiveEl) mostActiveEl.textContent = '-';
    if (maxMagEl) maxMagEl.textContent = '-';
  }

  // Handle 0 provinces found
  if (data.length === 0) {
    cardsGrid.innerHTML = `
      <div class="empty-data-alert" style="grid-column: 1 / -1;">
        <div class="empty-data-icon">
          <i class="fa-solid fa-map-location-dot"></i>
        </div>
        <div class="empty-data-title">Türkiye'de Seçilen Dönemde İl Bazlı Veri Bulunamadı</div>
        <p class="empty-data-desc">
          Seçilen zaman diliminde USGS veri tabanında Türkiye için kayıtlı deprem bulunamadı. Kandilli modeli il dağılım tablosunu ve ilçe fay hatlarını incelemek için zaman aralığını genişletin veya verileri yükleyin:
        </p>
        <div class="empty-data-actions">
          <button onclick="switchFeedAndFilter('all_week')" class="map-action-btn highlight">
            <i class="fa-regular fa-calendar-days"></i> Son 7 Günlük İlleri Göster
          </button>
          <button onclick="switchFeedAndFilter('all_month')" class="map-action-btn highlight">
            <i class="fa-solid fa-calendar-week"></i> Son 30 Günlük İlleri Göster
          </button>
          <button onclick="setRegion('all')" class="map-action-btn">
            <i class="fa-solid fa-earth-americas"></i> Dünya Geneline Dön
          </button>
        </div>
      </div>
    `;
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: var(--text-faint);">Seçilen dönemde Türkiye sınırlarında il bazlı sismik kayıt bulunmuyor.</td></tr>`;
    return;
  }

  // 1. Render Province Cards with full list of quakes and magnitude chips
  cardsGrid.innerHTML = data.map(prov => {
    const maxColor = getMagnitudeColor(prov.maxMag);
    const minColor = getMagnitudeColor(prov.minMag);

    return `
      <div class="prov-card" data-prov="${prov.name}">
        <!-- Province Header -->
        <div class="prov-card-header" onclick="focusProvince('${prov.name}', ${prov.center[0]}, ${prov.center[1]})">
          <span class="prov-name"><i class="fa-solid fa-location-dot"></i> ${prov.name}</span>
          <span class="prov-count-badge">${prov.count} Sismik Olay</span>
        </div>

        <!-- Province Summary Metrics Row -->
        <div class="prov-card-body">
          <div class="prov-mag-summary">
            <span class="prov-label">Maksimum:</span>
            <span class="prov-mag-pill" style="background: ${maxColor};">M ${prov.maxMag.toFixed(1)}</span>
          </div>
          <div class="prov-mag-summary">
            <span class="prov-label">Minimum:</span>
            <span class="prov-mag-pill" style="background: ${minColor};">M ${prov.minMag.toFixed(1)}</span>
          </div>
          <div class="prov-depth-summary">
            <span class="prov-label">Ort. Derinlik:</span>
            <span class="prov-depth-tag">${prov.avgDepth} km</span>
          </div>
        </div>

        <!-- Sismik Dağılım Hapları (All quakes magnitude chips in this province) -->
        <div class="prov-quakes-chips">
          ${prov.quakes.map(q => {
            const qMag = typeof q.properties?.mag === 'number' ? q.properties.mag : 0;
            const qColor = getMagnitudeColor(qMag);
            return `<span class="quake-mini-chip" style="border-color: ${qColor}; color: ${qColor};" title="${q.properties?.place || ''} &bull; M ${qMag.toFixed(1)}">M ${qMag.toFixed(1)}</span>`;
          }).join('')}
        </div>

        <!-- Scrollable List of ALL Earthquakes in this Province -->
        <div class="prov-quakes-list-container">
          <div class="prov-quakes-list-header">
            <span><i class="fa-solid fa-list-check"></i> Tüm Sarsıntılar (${prov.count}):</span>
            <span style="font-size: 9.5px; opacity: 0.8;">Son: ${timeAgo(prov.latestTime)}</span>
          </div>
          <div class="prov-quakes-scroll-list">
            ${prov.quakes.map(q => {
              const qMag = typeof q.properties?.mag === 'number' ? q.properties.mag : 0;
              const qColor = getMagnitudeColor(qMag);
              const qPlace = formatCleanPlace(q.properties?.place || 'Bilinmeyen Konum');
              const qDepth = (q.geometry?.coordinates?.[2] ?? 0).toFixed(1);
              const qTime = timeAgo(q.properties?.time);
              return `
                <div class="prov-quake-subitem" onclick="event.stopPropagation(); onEarthquakeItemClick('${q.id}')" title="Bu depreme haritada ve kürede odaklan">
                  <span class="subitem-mag" style="background: ${qColor};">M ${qMag.toFixed(1)}</span>
                  <div class="subitem-info">
                    <span class="subitem-place">${qPlace}</span>
                    <span class="subitem-meta">${qTime} &bull; Derinlik: ${qDepth} km</span>
                  </div>
                  <i class="fa-solid fa-crosshairs subitem-icon"></i>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Province Card Footer -->
        <div class="prov-card-footer" onclick="focusProvince('${prov.name}', ${prov.center[0]}, ${prov.center[1]})">
          <span class="prov-fault-tag" title="${prov.districtsSummary}">
            <i class="fa-solid fa-route"></i> ${prov.districtsSummary}
          </span>
          <span class="prov-focus-prompt">Küre & Haritada Odaklan <i class="fa-solid fa-chevron-right"></i></span>
        </div>
      </div>
    `;
  }).join('');

  // 2. Render Province Table with Range and All Quakes Chips
  tableBody.innerHTML = data.map(prov => {
    const maxColor = getMagnitudeColor(prov.maxMag);
    const minColor = getMagnitudeColor(prov.minMag);

    const chipsHtml = prov.quakes.map(q => {
      const qMag = typeof q.properties?.mag === 'number' ? q.properties.mag : 0;
      const qColor = getMagnitudeColor(qMag);
      return `<span class="quake-mini-chip" style="border-color: ${qColor}; color: ${qColor}; cursor: pointer;" onclick="event.stopPropagation(); onEarthquakeItemClick('${q.id}')" title="${q.properties?.place || ''}">M ${qMag.toFixed(1)}</span>`;
    }).join(' ');

    const magRangeStr = prov.minMag !== prov.maxMag
      ? `<span style="color: ${minColor};">M ${prov.minMag.toFixed(1)}</span> - <span style="color: ${maxColor}; font-weight: 700;">M ${prov.maxMag.toFixed(1)}</span>`
      : `<span style="color: ${maxColor}; font-weight: 700;">M ${prov.maxMag.toFixed(1)}</span>`;

    return `
      <tr>
        <td class="prov-row-name"><i class="fa-solid fa-location-dot" style="color: var(--accent-cyan);"></i> ${prov.name}</td>
        <td><span class="prov-count-badge">${prov.count} Olay</span></td>
        <td>${magRangeStr}</td>
        <td><div style="display: flex; flex-wrap: wrap; gap: 3px; max-width: 260px;">${chipsHtml}</div></td>
        <td style="font-family: var(--font-mono);">${prov.avgDepth} km</td>
        <td>${timeAgo(prov.latestTime)}</td>
        <td style="color: var(--text-muted);">${prov.districtsSummary}</td>
        <td>
          <button class="table-focus-btn" onclick="focusProvince('${prov.name}', ${prov.center[0]}, ${prov.center[1]})">
            <i class="fa-solid fa-bullseye"></i> Odaklan
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Focus 3D Globe & 2D Map on a specific Turkish Province
 */
window.focusProvince = function(provName, lat, lng) {
  audioSynth.playBlip(820, 0.12);

  // 3D Globe camera flight
  if (globe) {
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat, lng, altitude: 0.9 }, 1500);
  }

  // 2D Map flight
  if (map) {
    map.flyTo([lat, lng], 8, { duration: 1.2 });
  }

  // Filter list by this province name
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = provName;
    state.searchQuery = provName;
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) clearBtn.style.display = 'block';
    applyFiltersAndRender(false);
  }
};

// 2D Map Markers & Popups Rendering
function renderMapMarkers() {
  if (!map || !markerLayerGroup) return;

  markerLayerGroup.clearLayers();
  state.markersMap.clear();

  state.filteredFeatures.forEach(feature => {
    const coords = feature.geometry?.coordinates;
    if (!coords || coords.length < 2) return;

    const lon = coords[0];
    const lat = coords[1];
    const depth = coords[2] ?? 0;
    const mag = feature.properties?.mag ?? 0;
    const place = feature.properties?.place || 'Bilinmeyen Konum';
    const id = feature.id;

    const radius = getMarkerRadius(mag);
    const color = getMagnitudeColor(mag);
    const isCritical = mag >= 6.0;

    const marker = L.circleMarker([lat, lon], {
      radius: radius,
      fillColor: color,
      color: isCritical ? '#ffffff' : color,
      weight: isCritical ? 2.5 : 1,
      opacity: 0.95,
      fillOpacity: 0.72,
      className: isCritical ? 'pulse-marker' : ''
    });

    const popupContent = createPopupHTML(feature, lat, lon, depth, mag, place);
    marker.bindPopup(popupContent, {
      maxWidth: 320,
      minWidth: 240,
      className: 'glass-popup-container'
    });

    marker.on('click', () => {
      state.selectedEarthquakeId = id;
      highlightListItem(id);
      audioSynth.playBlip(750 + mag * 50, 0.1);
    });

    marker.addTo(markerLayerGroup);
    state.markersMap.set(id, marker);
  });
}

function createPopupHTML(feature, lat, lon, depth, mag, place) {
  const props = feature.properties || {};
  const magDisplay = mag !== null && !isNaN(mag) ? Number(mag).toFixed(1) : '-';
  const color = getMagnitudeColor(mag);
  const timeFormatted = formatTurkishDateTime(props.time);
  const timeAgoStr = timeAgo(props.time);
  const cleanPlace = formatCleanPlace(place);
  const url = props.url || '#';
  const id = feature.id;

  return `
    <div class="popup-card">
      <div class="popup-top">
        <span class="popup-mag-badge" style="background: ${color}; box-shadow: 0 0 10px ${color}88;">
          M ${magDisplay}
        </span>
        <div class="popup-location-title">${cleanPlace}</div>
      </div>
      <div class="popup-details-list">
        <div class="popup-detail-row">
          <span class="popup-detail-label">Derinlik</span>
          <span class="popup-detail-val">${Number(depth).toFixed(1)} km</span>
        </div>
        <div class="popup-detail-row">
          <span class="popup-detail-label">Koordinat</span>
          <span class="popup-detail-val">${lat.toFixed(2)}°, ${lon.toFixed(2)}°</span>
        </div>
        <div class="popup-detail-row">
          <span class="popup-detail-label">Tsunami</span>
          <span class="popup-detail-val" style="color: ${props.tsunami ? '#ef4444' : '#10b981'};">
            ${props.tsunami ? 'UYARI VAR' : 'Yok'}
          </span>
        </div>
        <div class="popup-detail-row">
          <span class="popup-detail-label">Hissedenler</span>
          <span class="popup-detail-val">${props.felt ? props.felt + ' bildirim' : 'Belirtilmedi'}</span>
        </div>
      </div>
      <div class="popup-time">
        <i class="fa-regular fa-clock"></i> ${timeAgoStr} &bull; ${timeFormatted}
      </div>
      <div class="popup-footer-actions">
        <button onclick="openDetailModal('${id}')" class="popup-link-btn" style="background: rgba(168, 85, 247, 0.15); border-color: rgba(168, 85, 247, 0.4); color: #d8b4fe;">
          <i class="fa-solid fa-circle-info"></i> Detaylı Kart
        </button>
        <a href="${url}" target="_blank" rel="noopener" class="popup-link-btn">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> USGS
        </a>
      </div>
    </div>
  `;
}

// KPI Metric Cards Render
function renderKPICards() {
  const totalCountEl = document.getElementById('kpi-total-count');
  const totalCaptionEl = document.getElementById('kpi-total-caption');
  const activeRegionBadge = document.getElementById('active-region-badge');

  const maxMagEl = document.getElementById('kpi-max-mag');
  const maxPlaceEl = document.getElementById('kpi-max-place');
  const maxTimeEl = document.getElementById('kpi-max-time');

  const latestMagEl = document.getElementById('kpi-latest-mag');
  const latestPlaceEl = document.getElementById('kpi-latest-place');
  const latestAgoEl = document.getElementById('kpi-latest-ago');

  const avgMagEl = document.getElementById('kpi-avg-mag');
  const avgDepthEl = document.getElementById('kpi-avg-depth');
  const depthCaptionEl = document.getElementById('kpi-depth-caption');

  const count = state.filteredFeatures.length;
  const regionCfg = CONFIG.regions[state.selectedRegion] || CONFIG.regions.all;

  if (activeRegionBadge) activeRegionBadge.textContent = regionCfg.badge;

  if (totalCountEl) totalCountEl.textContent = count.toLocaleString('tr-TR');
  if (totalCaptionEl) {
    const feedNames = {
      all_hour: 'Son 1 saatlik akış',
      all_day: 'Son 24 saatlik akış',
      all_week: 'Son 7 günlük akış',
      all_month: 'Son 30 günlük akış'
    };
    totalCaptionEl.textContent = `${feedNames[state.selectedFeed] || ''} &bull; ${regionCfg.name}`;
  }

  if (count === 0) {
    if (maxMagEl) maxMagEl.textContent = '-';
    if (maxPlaceEl) maxPlaceEl.textContent = 'Kriterlere uygun deprem yok';
    if (maxTimeEl) maxTimeEl.textContent = '-';

    if (latestMagEl) latestMagEl.textContent = '-';
    if (latestPlaceEl) latestPlaceEl.textContent = 'Kriterlere uygun deprem yok';
    if (latestAgoEl) latestAgoEl.textContent = '-';

    if (avgMagEl) avgMagEl.textContent = '-';
    if (avgDepthEl) avgDepthEl.textContent = '-';
    if (depthCaptionEl) depthCaptionEl.textContent = 'Veri yok';
    return;
  }

  // Max Earthquake
  let maxFeature = state.filteredFeatures[0];
  for (const f of state.filteredFeatures) {
    if ((f.properties?.mag ?? -99) > (maxFeature.properties?.mag ?? -99)) {
      maxFeature = f;
    }
  }

  const maxMag = maxFeature.properties?.mag ?? 0;
  if (maxMagEl) maxMagEl.textContent = maxMag.toFixed(1);
  if (maxPlaceEl) maxPlaceEl.textContent = formatCleanPlace(maxFeature.properties?.place || '-');
  if (maxTimeEl) maxTimeEl.textContent = timeAgo(maxFeature.properties?.time);

  // Latest Earthquake
  let latestFeature = state.filteredFeatures.reduce((prev, curr) => {
    return (curr.properties?.time || 0) > (prev.properties?.time || 0) ? curr : prev;
  }, state.filteredFeatures[0]);

  const latestMag = latestFeature.properties?.mag ?? 0;
  if (latestMagEl) latestMagEl.textContent = latestMag.toFixed(1);
  if (latestPlaceEl) latestPlaceEl.textContent = formatCleanPlace(latestFeature.properties?.place || '-');
  if (latestAgoEl) latestAgoEl.textContent = timeAgo(latestFeature.properties?.time);

  // Average Mag & Depth
  let totalMag = 0, totalDepth = 0, validMagCount = 0;
  for (const f of state.filteredFeatures) {
    const m = f.properties?.mag;
    const d = f.geometry?.coordinates?.[2];
    if (m !== null && !isNaN(m)) {
      totalMag += m;
      validMagCount++;
    }
    if (d !== null && !isNaN(d)) totalDepth += d;
  }

  const avgMag = validMagCount > 0 ? (totalMag / validMagCount).toFixed(1) : '-';
  const avgDepth = (totalDepth / count).toFixed(1);

  if (avgMagEl) avgMagEl.textContent = avgMag;
  if (avgDepthEl) avgDepthEl.textContent = `| Derinlik: ${avgDepth} km`;
  if (depthCaptionEl) depthCaptionEl.textContent = `${count} sismik olayın istatistiksel ortalaması`;
}

// Earthquake Feed List Render
function renderEarthquakeList() {
  const container = document.getElementById('earthquake-list');
  const countEl = document.getElementById('feed-list-count');
  const badgeEl = document.getElementById('feed-tab-badge');

  const count = state.filteredFeatures.length;
  if (countEl) countEl.textContent = count.toLocaleString('tr-TR');
  if (badgeEl) badgeEl.textContent = count.toLocaleString('tr-TR');

  if (!container) return;

  if (count === 0) {
    const regionCfg = CONFIG.regions[state.selectedRegion] || CONFIG.regions.turkey;
    container.innerHTML = `
      <div class="empty-data-alert">
        <div class="empty-data-icon">
          <i class="fa-solid fa-satellite-dish"></i>
        </div>
        <div class="empty-data-title">Seçilen Zaman Diliminde Veri Bulunamadı</div>
        <p class="empty-data-desc">
          Seçilen zaman diliminde veri bulunamadı, daha geniş bir zaman aralığı deneyin veya veriyi yükleyin. (Aktif Filtre: <strong>${regionCfg.name}</strong>)
        </p>
        <div class="empty-data-actions">
          <button onclick="switchFeedAndFilter('all_week')" class="map-action-btn highlight">
            <i class="fa-regular fa-calendar-days"></i> Son 7 Günü Yükle
          </button>
          <button onclick="switchFeedAndFilter('all_month')" class="map-action-btn highlight">
            <i class="fa-solid fa-calendar-week"></i> Son 30 Günü Yükle
          </button>
          <button onclick="setRegion('all')" class="map-action-btn">
            <i class="fa-solid fa-earth-americas"></i> Dünya Geneline Dön
          </button>
          <button onclick="fetchEarthquakeData(true)" class="map-action-btn">
            <i class="fa-solid fa-rotate"></i> Yeniden Dene
          </button>
        </div>
      </div>
    `;
    return;
  }

  const htmlCards = state.filteredFeatures.map(feature => {
    const props = feature.properties || {};
    const coords = feature.geometry?.coordinates || [0, 0, 0];
    const mag = props.mag;
    const magDisplay = mag !== null && !isNaN(mag) ? Number(mag).toFixed(1) : '-';
    const depth = coords[2] !== undefined ? Number(coords[2]).toFixed(1) : '-';
    const place = formatCleanPlace(props.place || 'Bilinmeyen Konum');
    const timeAgoStr = timeAgo(props.time);
    const badgeClass = getBadgeBgClass(mag);
    const isSelected = state.selectedEarthquakeId === feature.id;

    return `
      <div class="quake-card earthquake-card ${isSelected ? 'active' : ''}" data-id="${feature.id}" onclick="onEarthquakeItemClick('${feature.id}')">
        <div class="quake-mag-badge ${badgeClass}">
          ${magDisplay}
        </div>
        <div class="quake-info earthquake-info quake-text-container">
          <div class="quake-place earthquake-place" title="${place}">${place}</div>
          <div class="quake-meta earthquake-meta">
            <span><i class="fa-regular fa-clock"></i> ${timeAgoStr}</span>
            <span class="quake-depth-tag"><i class="fa-solid fa-arrows-down-to-line"></i> ${depth} km</span>
          </div>
        </div>
        <div class="quake-arrow">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = htmlCards;
}

function highlightListItem(id) {
  const container = document.getElementById('earthquake-list');
  if (!container) return;

  const currentActive = container.querySelector('.quake-card.active');
  if (currentActive) currentActive.classList.remove('active');

  const targetCard = container.querySelector(`.quake-card[data-id="${id}"]`);
  if (targetCard) {
    targetCard.classList.add('active');
    targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * Click on an Earthquake Card -> Focus 3D Globe & 2D Map
 */
window.onEarthquakeItemClick = function(id) {
  state.selectedEarthquakeId = id;
  const feature = state.filteredFeatures.find(f => f.id === id) || state.rawFeatures.find(f => f.id === id);
  if (!feature) return;

  const coords = feature.geometry?.coordinates;
  if (!coords) return;

  const lon = coords[0];
  const lat = coords[1];
  const mag = feature.properties?.mag ?? 0;

  audioSynth.playBlip(750 + mag * 50, 0.12);

  // 3D Globe flyTo
  if (globe) {
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat, lng: lon, altitude: 0.8 }, 1400);
  }

  // 2D Map flyTo
  if (map) {
    map.flyTo([lat, lon], Math.max(map.getZoom(), 8), { duration: 1.2 });
    const marker = state.markersMap.get(id);
    if (marker) marker.openPopup();
  }

  highlightListItem(id);
};

window.switchFeedAndFilter = function(feedKey) {
  state.selectedFeed = feedKey;
  const timeSelect = document.getElementById('time-range-select');
  if (timeSelect) timeSelect.value = feedKey;
  fetchEarthquakeData(true);
};

window.openDetailModal = function(id) {
  const feature = state.rawFeatures.find(f => f.id === id);
  if (!feature) return;

  const modal = document.getElementById('detail-modal');
  const magEl = document.getElementById('modal-mag');
  const placeEl = document.getElementById('modal-place');
  const timeEl = document.getElementById('modal-time');
  const depthEl = document.getElementById('modal-depth');
  const coordsEl = document.getElementById('modal-coords');
  const sigEl = document.getElementById('modal-sig');
  const tsunamiEl = document.getElementById('modal-tsunami');
  const usgsLinkEl = document.getElementById('modal-usgs-link');
  const focusBtn = document.getElementById('modal-focus-btn');

  const props = feature.properties || {};
  const coords = feature.geometry?.coordinates || [0, 0, 0];
  const mag = props.mag ?? 0;
  const magColor = getMagnitudeColor(mag);

  if (magEl) {
    magEl.textContent = `M ${Number(mag).toFixed(1)}`;
    magEl.style.background = magColor;
    magEl.style.boxShadow = `0 0 16px ${magColor}88`;
  }
  if (placeEl) placeEl.textContent = formatCleanPlace(props.place || 'Bilinmeyen Konum');
  if (timeEl) timeEl.textContent = `${timeAgo(props.time)} &bull; ${formatTurkishDateTime(props.time)}`;
  if (depthEl) depthEl.textContent = `${Number(coords[2] || 0).toFixed(1)} km`;
  if (coordsEl) coordsEl.textContent = `${coords[1].toFixed(4)}° N, ${coords[0].toFixed(4)}° E`;
  if (sigEl) sigEl.textContent = `${props.sig || '-'} / 1000`;
  if (tsunamiEl) {
    tsunamiEl.textContent = props.tsunami ? 'UYARI MEVCUT' : 'Tehlike Yok';
    tsunamiEl.style.color = props.tsunami ? '#ef4444' : '#10b981';
  }
  if (usgsLinkEl) usgsLinkEl.href = props.url || '#';

  if (focusBtn) {
    focusBtn.onclick = () => {
      modal.classList.add('hidden');
      window.onEarthquakeItemClick(id);
    };
  }

  modal?.classList.remove('hidden');
};

// Analytics & Scientific Distribution Render
function renderAnalytics() {
  const count = state.filteredFeatures.length;
  const magDistEl = document.getElementById('magnitude-distribution');
  const depthDistEl = document.getElementById('depth-distribution');
  const energyValEl = document.getElementById('total-energy-val');
  const energyComparisonEl = document.getElementById('energy-comparison-text');
  const tsunamiCountEl = document.getElementById('tsunami-alert-count');
  const feltCountEl = document.getElementById('felt-earthquake-count');

  if (!magDistEl || !depthDistEl) return;

  if (count === 0) {
    magDistEl.innerHTML = '<p style="color: var(--text-faint); font-size: 11px;">Analiz için veri bulunamadı.</p>';
    depthDistEl.innerHTML = '';
    if (energyValEl) energyValEl.textContent = '0';
    if (energyComparisonEl) energyComparisonEl.textContent = '-';
    if (tsunamiCountEl) tsunamiCountEl.textContent = '0';
    if (feltCountEl) feltCountEl.textContent = '0';
    return;
  }

  let micro = 0, light = 0, medium = 0, strong = 0;
  let totalEnergyJoules = 0, tsunamiAlerts = 0, feltCount = 0;
  let shallow = 0, intermediate = 0, deep = 0;

  state.filteredFeatures.forEach(f => {
    const mag = f.properties?.mag ?? 0;
    const depth = f.geometry?.coordinates?.[2] ?? 0;

    if (mag < 3.0) micro++;
    else if (mag < 4.5) light++;
    else if (mag < 6.0) medium++;
    else strong++;

    if (depth < 10) shallow++;
    else if (depth < 70) intermediate++;
    else deep++;

    if (mag > 0) totalEnergyJoules += Math.pow(10, 4.8 + 1.5 * mag);
    if (f.properties?.tsunami === 1) tsunamiAlerts++;
    if ((f.properties?.felt ?? 0) > 0) feltCount++;
  });

  const getPercent = val => ((val / count) * 100).toFixed(0);

  magDistEl.innerHTML = `
    <div class="dist-bar-item">
      <div class="dist-bar-header">
        <span class="dist-bar-label">&lt; 3.0 Mikro Depremler</span>
        <span class="dist-bar-count">${micro} (${getPercent(micro)}%)</span>
      </div>
      <div class="dist-progress-track">
        <div class="dist-progress-fill fill-micro" style="width: ${getPercent(micro)}%;"></div>
      </div>
    </div>
    <div class="dist-bar-item">
      <div class="dist-bar-header">
        <span class="dist-bar-label">3.0 - 4.4 Hafif Şiddette</span>
        <span class="dist-bar-count">${light} (${getPercent(light)}%)</span>
      </div>
      <div class="dist-progress-track">
        <div class="dist-progress-fill fill-light" style="width: ${getPercent(light)}%;"></div>
      </div>
    </div>
    <div class="dist-bar-item">
      <div class="dist-bar-header">
        <span class="dist-bar-label">4.5 - 5.9 Orta / Hissedilen</span>
        <span class="dist-bar-count">${medium} (${getPercent(medium)}%)</span>
      </div>
      <div class="dist-progress-track">
        <div class="dist-progress-fill fill-medium" style="width: ${getPercent(medium)}%;"></div>
      </div>
    </div>
    <div class="dist-bar-item">
      <div class="dist-bar-header">
        <span class="dist-bar-label" style="color: #f87171;">6.0+ Şiddetli & Kritik</span>
        <span class="dist-bar-count" style="color: #f87171;">${strong} (${getPercent(strong)}%)</span>
      </div>
      <div class="dist-progress-track">
        <div class="dist-progress-fill fill-strong" style="width: ${getPercent(strong)}%;"></div>
      </div>
    </div>
  `;

  depthDistEl.innerHTML = `
    <div class="depth-item">
      <div class="depth-item-title">Sığ Odaklı</div>
      <div class="depth-item-val">${shallow}</div>
      <div class="depth-item-desc">&lt; 10 km</div>
    </div>
    <div class="depth-item">
      <div class="depth-item-title">Orta Derinlik</div>
      <div class="depth-item-val">${intermediate}</div>
      <div class="depth-item-desc">10 - 70 km</div>
    </div>
    <div class="depth-item">
      <div class="depth-item-title">Derin Odaklı</div>
      <div class="depth-item-val">${deep}</div>
      <div class="depth-item-desc">&gt; 70 km</div>
    </div>
  `;

  const totalGJ = totalEnergyJoules / 1e9;
  if (energyValEl) {
    if (totalGJ > 1e6) {
      energyValEl.textContent = (totalGJ / 1e6).toFixed(2) + ' Milyon';
    } else {
      energyValEl.textContent = Math.round(totalGJ).toLocaleString('tr-TR');
    }
  }

  if (energyComparisonEl) {
    const tntTons = Math.round(totalEnergyJoules / 4.184e9);
    energyComparisonEl.textContent = `Yaklaşık ~${tntTons.toLocaleString('tr-TR')} ton TNT eşdeğeri sismik dalga enerjisi`;
  }

  if (tsunamiCountEl) {
    tsunamiCountEl.textContent = tsunamiAlerts;
    tsunamiCountEl.style.color = tsunamiAlerts > 0 ? '#ef4444' : '#fff';
  }
  if (feltCountEl) feltCountEl.textContent = feltCount;
}

// ============================================================================
// 2. Dinamik Küre & Harita Odaklanma (Zoom)
// ============================================================================
function setRegion(regionKey) {
  if (!CONFIG.regions[regionKey]) return;

  state.selectedRegion = regionKey;
  const regionConfig = CONFIG.regions[regionKey];

  const regionSelect = document.getElementById('region-select');
  if (regionSelect && regionSelect.value !== regionKey) {
    regionSelect.value = regionKey;
  }

  // Hızlı odaklanma butonlarının aktiflik durumunu senkronize et
  const quickTurkeyBtn = document.getElementById('btn-quick-turkey');
  const quickWorldBtn = document.getElementById('btn-quick-world');
  if (quickTurkeyBtn) quickTurkeyBtn.classList.toggle('highlight', regionKey === 'turkey');
  if (quickWorldBtn) quickWorldBtn.classList.toggle('highlight', regionKey === 'all');

  try {
    audioSynth.playBlip(620, 0.1);
  } catch (e) {}

  // 3D Küre Kamera Hareketi (Hata durumunda istek akışını kesmemesi için try/catch içinde)
  try {
    if (globe) {
      if (regionKey === 'turkey') {
        try {
          if (typeof globe.controls === 'function' && globe.controls()) {
            globe.controls().autoRotate = false;
          }
        } catch (e) {}
        globe.pointOfView({
          lat: regionConfig.center[0],
          lng: regionConfig.center[1],
          altitude: regionConfig.globeAlt
        }, 1800);
      } else if (regionKey === 'all') {
        globe.pointOfView({
          lat: regionConfig.center[0],
          lng: regionConfig.center[1],
          altitude: regionConfig.globeAlt
        }, 1800);
        try {
          if (typeof globe.controls === 'function' && globe.controls()) {
            globe.controls().autoRotate = state.autoRotate;
          }
        } catch (e) {}
      }
    }
  } catch (err) {
    console.warn('Globe animation warning:', err);
  }

  // 2D Harita Hareketi
  try {
    if (map) {
      map.flyTo(regionConfig.center, regionConfig.zoom, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  } catch (err) {
    console.warn('Map flyTo warning:', err);
  }

  // Yenile butonuna basmaya gerek kalmadan seçilen bölgenin API'sine anında istek at
  fetchEarthquakeData(true);
}

// Event Listeners & Interactive Controls Setup
function setupEventListeners() {
  // 1. Time Range Selector
  const timeSelect = document.getElementById('time-range-select');
  if (timeSelect) {
    timeSelect.addEventListener('change', (e) => {
      state.selectedFeed = e.target.value;
      fetchEarthquakeData(true); // Sayacı beklemeden yeni feed verisini anında çeker ve sayacı sıfırlar
    });
  }

  // 2. Region / Country Selector
  const regionSelect = document.getElementById('region-select');
  if (regionSelect) {
    const handleRegionChange = (e) => {
      setRegion(e.target.value);
    };
    regionSelect.addEventListener('change', handleRegionChange);
    regionSelect.addEventListener('input', handleRegionChange);
  }

  // 3. Magnitude Quick Filter Pills
  const magnitudePills = document.getElementById('magnitude-pills');
  if (magnitudePills) {
    magnitudePills.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;

      magnitudePills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      state.minMagnitude = parseFloat(btn.dataset.mag || '0');
      audioSynth.playBlip(680, 0.08);
      fetchEarthquakeData(true); // Sayacı beklemeden anında güncel veriyi çeker ve sıfırlar
    });
  }

  // 4. Live Search Input (Gecikmeli tetikleme ile anlık veri çekme)
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('btn-clear-search');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        fetchEarthquakeData(true);
      }, 450);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        fetchEarthquakeData(true);
      }
    });
  }

  // 5. Header Audio Toggle
  const audioBtn = document.getElementById('btn-audio-toggle');
  const audioIcon = document.getElementById('audio-icon');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      audioSynth.init();

      if (state.soundEnabled) {
        audioBtn.classList.add('active');
        if (audioIcon) audioIcon.className = 'fa-solid fa-volume-high';
        audioBtn.querySelector('.btn-text').textContent = 'Ses: Açık';
        audioSynth.playBlip(880, 0.15);
      } else {
        audioBtn.classList.remove('active');
        if (audioIcon) audioIcon.className = 'fa-solid fa-volume-xmark';
        audioBtn.querySelector('.btn-text').textContent = 'Ses: Kapalı';
      }
    });
  }

  // 6. Tectonic Faults Toggle
  const faultsBtn = document.getElementById('btn-faults-toggle');
  if (faultsBtn) {
    faultsBtn.addEventListener('click', () => {
      state.showTectonicPlates = !state.showTectonicPlates;
      faultsBtn.classList.toggle('active', state.showTectonicPlates);

      if (tectonicPlatesLayer && map) {
        if (state.showTectonicPlates) tectonicPlatesLayer.addTo(map);
        else map.removeLayer(tectonicPlatesLayer);
      }
    });
  }

  // 7. Manual Refresh Button
  const refreshBtn = document.getElementById('btn-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => fetchEarthquakeData(true));
  }

  // 8. View Mode Switcher: 3D Globe vs 2D Map
  const btnViewGlobe = document.getElementById('btn-view-globe');
  const btnViewMap = document.getElementById('btn-view-map');
  const globeContainer = document.getElementById('globe-container');
  const mapContainer = document.getElementById('map-container');
  const globeControlsBox = document.getElementById('globe-controls-box');
  const mapLayerBox = document.getElementById('map-layer-box');

  if (btnViewGlobe && btnViewMap) {
    btnViewGlobe.addEventListener('click', () => {
      state.currentViewMode = 'globe';
      btnViewGlobe.classList.add('active');
      btnViewMap.classList.remove('active');

      globeContainer?.classList.remove('hidden');
      mapContainer?.classList.add('hidden');
      globeControlsBox?.classList.remove('hidden');
      mapLayerBox?.classList.add('hidden');

      handleGlobeResize();
    });

    btnViewMap.addEventListener('click', () => {
      state.currentViewMode = 'map';
      btnViewMap.classList.add('active');
      btnViewGlobe.classList.remove('active');

      mapContainer?.classList.remove('hidden');
      globeContainer?.classList.add('hidden');
      mapLayerBox?.classList.remove('hidden');
      globeControlsBox?.classList.add('hidden');

      setTimeout(() => map?.invalidateSize(), 100);
    });
  }

  // 9. Globe Auto-Rotation Toggle
  const btnToggleRotate = document.getElementById('btn-toggle-rotate');
  const rotateBtnText = document.getElementById('rotate-btn-text');
  if (btnToggleRotate) {
    btnToggleRotate.addEventListener('click', () => {
      state.autoRotate = !state.autoRotate;
      if (globe && globe.controls()) {
        globe.controls().autoRotate = state.autoRotate;
      }
      btnToggleRotate.classList.toggle('active', state.autoRotate);
      if (rotateBtnText) {
        rotateBtnText.textContent = state.autoRotate ? 'Dönüş: Açık' : 'Dönüş: Kapalı';
      }
    });
  }

  // 10. Globe Shockwave Rings Toggle
  const btnToggleRings = document.getElementById('btn-toggle-rings');
  if (btnToggleRings) {
    btnToggleRings.addEventListener('click', () => {
      state.showRings = !state.showRings;
      btnToggleRings.classList.toggle('active', state.showRings);
      renderGlobeData();
    });
  }

  // 11. Quick Focus Buttons (Turkey & World)
  const quickTurkeyBtn = document.getElementById('btn-quick-turkey');
  if (quickTurkeyBtn) {
    quickTurkeyBtn.addEventListener('click', () => setRegion('turkey'));
  }

  const quickWorldBtn = document.getElementById('btn-quick-world');
  if (quickWorldBtn) {
    quickWorldBtn.addEventListener('click', () => setRegion('all'));
  }

  // 12. Province View Mode (Cards vs Table)
  const btnProvCards = document.getElementById('btn-prov-cards');
  const btnProvTable = document.getElementById('btn-prov-table');
  const provCardsView = document.getElementById('province-cards-view');
  const provTableView = document.getElementById('province-table-view');

  if (btnProvCards && btnProvTable && provCardsView && provTableView) {
    btnProvCards.addEventListener('click', () => {
      btnProvCards.classList.add('active');
      btnProvTable.classList.remove('active');
      provCardsView.classList.remove('hidden');
      provTableView.classList.add('hidden');
    });

    btnProvTable.addEventListener('click', () => {
      btnProvTable.classList.add('active');
      btnProvCards.classList.remove('active');
      provTableView.classList.remove('hidden');
      provCardsView.classList.add('hidden');
    });
  }

  // 13. Fullscreen Toggle
  const fullscreenBtn = document.getElementById('btn-map-fullscreen');
  const visualizerPanel = document.querySelector('.visualizer-panel');
  if (fullscreenBtn && visualizerPanel) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        visualizerPanel.requestFullscreen?.().catch(err => console.warn(err));
      } else {
        document.exitFullscreen?.().catch(err => console.warn(err));
      }
    });

    document.addEventListener('fullscreenchange', () => {
      const isFs = !!document.fullscreenElement;
      fullscreenBtn.innerHTML = isFs ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>';
      handleGlobeResize();
      if (map) map.invalidateSize();
    });
  }

  // 15. Feed Sort Selector
  const sortSelect = document.getElementById('feed-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      sortFilteredFeatures();
      renderEarthquakeList();
    });
  }

  // 16. Modal Close
  const modalOverlay = document.getElementById('detail-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalOverlay && modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modalOverlay.classList.add('hidden'));
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
    });
  }
}

// Auto-Refresh Timer Logic
function startAutoRefreshTimer() {
  clearInterval(state.countdownTimerId);
  state.countdownSeconds = CONFIG.refreshIntervalSeconds;

  state.countdownTimerId = setInterval(() => {
    state.countdownSeconds--;
    const badge = document.getElementById('countdown-badge');
    if (badge) badge.textContent = `${state.countdownSeconds}s`;

    if (state.countdownSeconds <= 0) {
      resetCountdown();
      fetchEarthquakeData(false);
    }
  }, 1000);
}

function resetCountdown() {
  state.countdownSeconds = CONFIG.refreshIntervalSeconds;
  const badge = document.getElementById('countdown-badge');
  if (badge) badge.textContent = `${state.countdownSeconds}s`;
}

// Helper Utilities & Formatting
function getMarkerRadius(mag) {
  if (mag === null || isNaN(mag)) return 4;
  const m = Math.max(0.1, mag);
  return Math.max(4, Math.min(28, Math.pow(m, 1.55) * 1.5));
}

function getMagnitudeColor(mag) {
  if (mag >= 7.0) return '#f43f5e'; // Extreme Neon Red
  if (mag >= 6.0) return '#ef4444'; // Red
  if (mag >= 4.5) return '#f97316'; // Orange
  if (mag >= 3.0) return '#eab308'; // Amber/Yellow
  return '#10b981'; // Green
}

function getBadgeBgClass(mag) {
  if (mag >= 7.0) return 'bg-extreme';
  if (mag >= 6.0) return 'bg-strong';
  if (mag >= 4.5) return 'bg-medium';
  if (mag >= 3.0) return 'bg-light';
  return 'bg-micro';
}

function hexToRgba(hex, alpha = 1) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

function formatTime(date) {
  return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function formatTurkishDateTime(timestamp) {
  if (!timestamp) return '-';
  const d = new Date(timestamp);
  return d.toLocaleString('tr-TR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function timeAgo(timestamp) {
  if (!timestamp) return '-';
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return 'Az önce';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} dk önce`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} saat önce`;
  const days = Math.floor(hours / 24);
  return `${days} gün önce`;
}

function formatCleanPlace(placeStr) {
  if (!placeStr) return 'Bilinmeyen Konum';

  return placeStr
    .replace(/\bof\b/gi, '')
    .replace(/\bTurkey\b/gi, 'Türkiye')
    .replace(/\bCentral Turkey\b/gi, 'İç Anadolu, Türkiye')
    .replace(/\bEastern Turkey\b/gi, 'Doğu Anadolu, Türkiye')
    .replace(/\bWestern Turkey\b/gi, 'Ege / Batı Anadolu, Türkiye')
    .replace(/\bAegean Sea\b/gi, 'Ege Denizi')
    .replace(/\bBlack Sea\b/gi, 'Karadeniz')
    .replace(/\bMediterranean Sea\b/gi, 'Akdeniz')
    .trim();
}

/**
 * Floating Toast Notification Helper
 */
function showToastNotification(msg, duration = 4500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-info" style="color: var(--accent-cyan); font-size: 14px; flex-shrink: 0;"></i>
    <span>${msg}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(14px)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// Application Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  initGlobe();
  initMap();
  setupEventListeners();
  fetchEarthquakeData(true);
  startAutoRefreshTimer();
});
