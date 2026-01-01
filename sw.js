const cacheName = 'my-app-cache-v1';
const assetsToCache = [
  './index.html',
  './icon-192.png',
  './icon-512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch event - offline support
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
