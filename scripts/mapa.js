export function inicializarMapa() {
  const centro = [-21.6282, -64.7713]; // Coordenada centrada (puedes ajustar)

  // 📦 Capa callejera
  const callejero = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  });

  // 🛰️ Capa satelital (Esri)
  const satelital = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri & the GIS community',
    maxZoom: 18
  });

  // Crear mapa con capa satelital como predeterminada
  const map = L.map('map', {
    center: centro,
    zoom: 13,
    layers: [satelital] // o cambia a callejero si prefieres eso como predeterminado
  });

  // 🎛️ Control para cambiar capas base
  const baseMaps = {
    "Simple": callejero,
    "Satelital": satelital
  };

  L.control.layers(baseMaps).addTo(map);

  return map;
}
