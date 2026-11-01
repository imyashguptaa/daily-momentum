// Daily Momentum offline engine.
// Opens the app from the device's cache first (instant, works offline),
// then fetches the latest version in the background for next time.
const CACHE = 'daily-momentum-v4';
const FILES = ['./index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES.map(f => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Every page open (with or without ?source=app) shares one cached copy of index.html.
  const isPage = req.mode === 'navigate' && (url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'));
  const key = isPage ? new URL('./index.html', self.registration.scope).href : req;
  const fresh = isPage ? new Request(key, { cache: 'no-cache' }) : req;

  const network = fetch(fresh).then(async res => {
    if (res && res.ok && res.type === 'basic' && !res.redirected) {
      const copy = res.clone();
      const cache = await caches.open(CACHE);
      await cache.put(key, copy);
    }
    return res;
  }).catch(() => null);
  event.waitUntil(network.then(() => undefined));

  event.respondWith((async () => {
    const cached = await caches.match(key, isPage ? undefined : { ignoreSearch: true });
    if (cached) return cached;
    const res = await network;
    if (res) return res;
    return new Response('Offline', { status: 503, statusText: 'Offline' });
  })());
});
