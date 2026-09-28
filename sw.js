const CACHE = "tasksh-v40";
const ASSETS = [
  "./",
  "./index.html",
  "./bundle.js",
  "./manifest.json",
  "./icon-192.png",
  "./badge-96.png",
  "./icon-512.png",
  "./icon-maskable-192.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// cache-first for the app shell, falling back to network, and updating
// the cache in the background so the next load gets fresh assets
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

// ---- push notifications ----
// Fired by the browser/OS push service when the worker sends a message,
// even if this app/tab isn't open. Shows a normal system notification —
// sound + vibration come from the OS default unless `silent: true` is set,
// which we deliberately don't set.
self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: "tasks.sh", body: event.data ? event.data.text() : "" };
  }

  const title = data.title || "tasks.sh";
  const asset = (f) => new URL(f, self.registration.scope).href;

  // icon  = the large artwork in the notification shade. Full colour is right.
  // badge = the small glyph in the STATUS BAR. Android throws the colours away
  //         and fills the alpha channel with one flat tint, so it must be a
  //         transparent silhouette. icon-192.png is 100% opaque, which made
  //         that silhouette the entire square -- the white blob in the status
  //         bar was the app icon, masked.
  const options = {
    body: data.body || "",
    icon: asset("icon-192.png"),
    badge: asset("badge-96.png"),
    vibrate: [200, 80, 200],
    tag: data.tag || "tasksh-routine",
    renotify: true,
    // stamp it with when the routine was due, not when Android got round to
    // showing it -- Doze can defer delivery by minutes
    timestamp: data.at || Date.now(),
    data: { url: data.url || "./" },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Focus an already-open tab if there is one, otherwise open a new one.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "./";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if ("focus" in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(targetUrl);
    })
  );
});
