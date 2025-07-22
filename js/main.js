import { inicializarMapa } from './mapa.js';
import { ruta, paradas } from './rutas_real.js';

const map = inicializarMapa();

// 🛤️ Dibujar la ruta de la peregrinación
L.polyline(ruta, {
  color: 'blue',
  weight: 4,
  opacity: 0.7,
  smoothFactor: 1
}).addTo(map);

// 📍 Agregar paradas con nombres visibles siempre
paradas.forEach(parada => {
  L.marker(parada.coords).addTo(map)
    .bindTooltip(parada.nombre, {
      permanent: true,
      direction: 'top',
      offset: [0, -10],
      className: 'etiqueta-parada'
    })
    .openTooltip();
});

// 🔍 Ajustar el mapa para mostrar toda la ruta
const bounds = L.latLngBounds(ruta);
map.fitBounds(bounds);

// 📡 Mostrar ubicación actual del peregrino (GPS)
if ('geolocation' in navigator) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // Crear o actualizar el marcador de ubicación
      if (!window.ubicacionMarker) {
        window.ubicacionMarker = L.marker([latitude, longitude], {
          icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            iconSize: [25, 25],
            iconAnchor: [12, 12]
          })
        }).addTo(map)
          .bindTooltip("Estás aquí", {
            permanent: true,
            direction: 'bottom'
          })
          .openTooltip();
      } else {
        window.ubicacionMarker.setLatLng([latitude, longitude]);
      }

    },
    (error) => {
      console.error('Error al obtener ubicación:', error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 10000
    }
  );
} else {
  alert("Tu navegador no soporta geolocalización.");
}

// 📍 Botón flotante: centrar mapa en la ubicación actual
document.getElementById("btnUbicacion").addEventListener("click", () => {
  if (window.ubicacionMarker) {
    map.setView(window.ubicacionMarker.getLatLng(), 16);
  } else {
    alert("Tu ubicación aún no ha sido detectada.");
  }
});
