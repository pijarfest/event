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
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
  'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js',
  'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
  'https://maps.google.com/maps/api/js?key=AIzaSyBuiA3MjmjAl7GaxihQierNuS9oA4llBPE',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gmap3/7.2.0/gmap3.min.js',
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
