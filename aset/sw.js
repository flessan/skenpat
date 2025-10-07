// sw.js
const CACHE = 'skenpat-v1';
const urls = ['/', '/g.png', '/aset/skenpat.css', '/aset/sken.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(urls)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
