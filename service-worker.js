self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("grandma-care-v1").then(cache => {
      return cache.addAll([
        "./",
        "./senior-tablet.html",
        "./caregiver-dashboard.html",
        "./manifest.json",
        "./favicon.png",
        "./family-photo-1.jpg",
        "./family-photo-2.jpg",
        "./family-photo-3.jpg",
        "./family-photo-4.jpg"
      ]);
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
