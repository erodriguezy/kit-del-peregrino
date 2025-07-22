const CACHE_NAME = "peregrino-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/main.js",
  "./js/mapa.js",
  "./js/rutas_real.js",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  "https://cdn-icons-png.flaticon.com/512/3448/3448449.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
