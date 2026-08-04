const CACHE_NAME = "bbs-fleet-v1";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request)
  );
});
