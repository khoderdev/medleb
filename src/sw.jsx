// sw.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/manifest.json', '/static/css/main.chunk.css', '/static/js/main.chunk.js', '/static/js/0.chunk.js', '/static/js/bundle.js', '/logo192.png']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

