// Hesabist v5 — this file replaces the old v4 service worker.
// Its only job: delete the old caches and unregister itself,
// so visitors who saw the old site stop being served stale pages.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
    })()
  );
});
