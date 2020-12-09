import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core';
import CONFIG from './globals/config';

skipWaiting();
clientsClaim();

setCacheNameDetails({
  prefix: CONFIG.CACHE_NAME,
});

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
    }),
  ],
});

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        maxEntries: 50,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  }),
);

registerRoute(
  /^https:\/\/kit\.fontawesome\.com\//,
  new StaleWhileRevalidate({
    cacheName: 'javascript-font-awesome',
  }),
);

registerRoute(
  /^https:\/\/kit-free\.fontawesome\.com\//,
  new StaleWhileRevalidate({
    cacheName: 'icon-font-awesome',
  }),
);

registerRoute(
  /^https:\/\/ka-f\.fontawesome\.com\//,
  new StaleWhileRevalidate({
    cacheName: 'css-font-awesome',
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate(),
);

cleanupOutdatedCaches();
