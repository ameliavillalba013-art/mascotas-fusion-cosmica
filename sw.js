const CACHE_NAME = 'fusion-cosmica-v1';
const urlsToCache = [
  '/mascotas-fusion-cosmica/',
  '/mascotas-fusion-cosmica/index.html',
  '/mascotas-fusion-cosmica/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
