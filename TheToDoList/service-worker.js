const CACHE_NAME = 'todo-list-cache-v1';
const urlsToCache = ['/', 'index.html', 'style.css', 'app.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
navigator.serviceWorker.register("service-worker.js")
caches.open("todo-list-v1").then(cache => {
    return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js"
    ]);
})
