var cacheName = 'pijarfest';

var filesToCache = [
  '/',
  '/index.html',
  '/slide.json',
  '/creative.json',
  '/icon.json',
  '/Ticket.html',
  '/Travel.html',
  '/Pinus.html',
  '/Camping.html',
  '/Wisata.html',
  '/Tentang.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
