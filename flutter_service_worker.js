'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "68639ebc23b882e78a41505b61c49500",
"index.html": "4449be8bee401f66dd4337f5d5642572",
"/": "4449be8bee401f66dd4337f5d5642572",
"main.dart.js": "0dc45a24bc054d50d1363b74a7455316",
"version.json": "cceae08420c183980c1ce2a87b0f655f",
"assets/assets/images/board_members_group_with_poster.jpeg": "b536c35c3d29d00007c877b1a85f00fb",
"assets/assets/images/home_page_board.jpg": "7e6a76370a2179e7ba68de5820a7df0d",
"assets/assets/images/Board%2520post.JPG": "1f558ef53a2cc074ed3d5c44c4969847",
"assets/assets/images/chairperson.JPG": "c82792653c93697a4d66937321e128ae",
"assets/assets/images/co_chairperson.JPG": "96f8974d55681b8f2527f7174a7c8e28",
"assets/assets/images/cosec.JPG": "5be6fb4fb7b787657058b70fd0f90ced",
"assets/assets/images/design_head.JPG": "695d3956895067a010afbdea44ea91e7",
"assets/assets/images/editorial.JPG": "fbd6a293d5eb30e3b165bf03d882fd72",
"assets/assets/images/events_head.JPG": "f372266310ab9cc48d2dbbc634845f95",
"assets/assets/images/headmentor.JPG": "3998bd8e9bdf373a7c3d0fb17ed05385",
"assets/assets/images/hr_head.JPG": "1cdc6d4b3c6185b8d626e182dd3630f5",
"assets/assets/images/outreach_head.JPG": "b61bf566ca21e7dac80c8d6a39683e85",
"assets/assets/images/publicity_head.JPG": "75d8f1bbc2523550c0cf10086868da11",
"assets/assets/images/secretary.JPG": "ebaf31323c457c0145c7eb7e606a2595",
"assets/assets/images/qr.png": "803bc69a7fdd9bed0ca2fdce538c8b40",
"assets/assets/images/gallery/1.jpeg": "471fc6917318b662666bcc8e48fd154a",
"assets/assets/images/gallery/2.jpeg": "5745ee94fbe5ad598d7e2edb93c494eb",
"assets/assets/images/gallery/3.jpeg": "7ee9881677d3dabd5f2d8afcfcb303c0",
"assets/assets/images/gallery/4.jpeg": "6dee9cd4e4f7100a00167968cd097bdb",
"assets/assets/images/gallery/5.jpeg": "85498661409eb3432604dc33a05a26ae",
"assets/assets/images/gallery/6.jpeg": "d97130736e30d74166a73ee7c34b2cf1",
"assets/assets/images/gallery/7.jpeg": "210624fc28d1467df59fe8c358371add",
"assets/assets/images/gallery/8.jpeg": "1eda10caf0ec3d27004d32b4a3fa90bb",
"assets/assets/images/gallery/9.jpeg": "04fdfc7c5e237547bbc1d7d74eeadd5b",
"assets/assets/images/gallery/10.jpeg": "388d2c1df387cc40ef2f563c99a46db5",
"assets/assets/images/gallery/11.jpeg": "10fb7870fe67601813db098aab3c3aa8",
"assets/assets/images/gallery/12.jpeg": "5829db5145dd05bd0f5003ad717342e6",
"assets/assets/images/gallery/13.jpeg": "511cd532aa357fff7f52954f6508542e",
"assets/assets/images/gallery/14.jpeg": "a3db0a64d0d4d69a9df30662919a199d",
"assets/assets/images/gallery/15.jpeg": "c19b35ce89a688b3ce2228137b924b6b",
"assets/assets/images/gallery/16.jpeg": "603607243b40ea372d2cceb24c9f8957",
"assets/assets/images/gallery/17.jpeg": "267a11323327fb017f62e57eea7448f4",
"assets/assets/images/gallery/18.jpeg": "0ff49f80a66f2ba60e600428876e9783",
"assets/assets/images/gallery/19.jpeg": "411051b317d28d968615e15ffcac9857",
"assets/assets/images/gallery/20.jpeg": "34ec3498a3b9aecf84a622e0322873b5",
"assets/assets/images/gallery/21.jpeg": "c376e1b02d97b3c266707387eaac0840",
"assets/assets/images/gallery/22.jpeg": "38d3aaa11f52cae5f3097172df3b0a4a",
"assets/assets/images/gallery/23.jpeg": "79fb263eeeffbff7bb81776dfe3d57b6",
"assets/assets/images/gallery/24.jpeg": "66fe232d595dd6df9495002e6a9e5cbe",
"assets/assets/images/gallery/25.jpeg": "3b36c6363f7d716a257bf7c1124488a4",
"assets/assets/images/gallery/26.jpeg": "02c0d5ec261c3cbae9d7011b7f33f88e",
"assets/assets/images/gallery/27.jpeg": "9987fdfbc82b4e2a9cb05d229c977246",
"assets/assets/images/gallery/28.jpeg": "c6817c81b4f74aa5bfa402371660230a",
"assets/assets/images/gallery/29.jpeg": "29e30c3c40d97fca1b094d60acf14a44",
"assets/assets/images/gallery/31.jpeg": "0a3ac9ee559adbc43f0d0f0b22390261",
"assets/assets/images/gallery/30.jpeg": "4dc5d431879ffe3e56d7c122cdb1bbea",
"assets/assets/images/gallery/32.jpeg": "cf0a3d5527948f171729db764b23be27",
"assets/assets/images/gallery/33.jpeg": "cfe98eeb7f261543aff6f68458e48d0f",
"assets/assets/images/gallery/34.jpeg": "171ee005b742690242b49f96466d53b1",
"assets/assets/images/gallery/35.jpeg": "559b637e6aa6fe71ee0dfa25ade7a057",
"assets/assets/images/gallery/36.jpeg": "4cef43725d9a3af5bfd3475cf2bc706c",
"assets/assets/images/gallery/37.jpeg": "7e929a9df72951e95d995440a4c93e2a",
"assets/assets/images/gallery/38.jpeg": "199805dc873640379703343863e4cb42",
"assets/assets/images/gallery/39.jpeg": "3f2f840ddb468a21d72f9ffdc004a7a0",
"assets/assets/images/gallery/40.jpeg": "e2cbf7b912faa8d4c5b03ebb30f97c19",
"assets/assets/images/gallery/41.jpeg": "f46f3b7f37535d840c478d8c4fee51d1",
"assets/assets/images/gallery/42.jpeg": "cbc735d61f97c60a676d538129f26345",
"assets/assets/images/gallery/43.jpeg": "d5a334a7f7a4529acdebe406ba713e15",
"assets/assets/images/gallery/44.jpeg": "204e3a6ac4636ae7079f2526a3b46ae1",
"assets/assets/images/gallery/46.jpeg": "2127f64e1917858bb8502a1116eaf715",
"assets/assets/images/gallery/47.jpeg": "5781daec324b40057b04bee196fae18d",
"assets/assets/images/gallery/48.jpeg": "40a7ad4f73a12cacd5112b53e2dcc6f7",
"assets/assets/images/gallery/49.jpeg": "8a6428e06a2a76ae59c395a7bea22813",
"assets/assets/images/gallery/50.jpeg": "eacb0b4e71341bf4a8d7e4dfc130ead2",
"assets/assets/images/gallery/45.jpeg": "11d4f80eb9d670dc47a5eb69e6b94b93",
"assets/assets/images/events/1.png": "3546bc54f020c022d0e012466a692b43",
"assets/assets/images/events/2.png": "67f2b9c2f8b48d7c3cfba8ec81179e10",
"assets/assets/images/events/3.png": "c32d50fd01530fd5807349984ca07d15",
"assets/assets/videos/logoNew.mp4": "8d814a9f7c64f17494d2bc6c6984944a",
"assets/assets/videos/showcase.mp4": "f2309dae0a3e1e48b339b8236b8e171d",
"assets/assets/fonts/Biryani-SemiBold.ttf": "ac266aa76a0a86d25e7e233942b76481",
"assets/assets/fonts/Fascinate-Regular.ttf": "618b096a0dc09f62319ff3eb70ed0c61",
"assets/assets/icons/logo.jpg": "999dcedaaf5d2c90b8215e3033a8df43",
"assets/fonts/MaterialIcons-Regular.otf": "79527fdfe300be25a4cd7225bddc0f78",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "98f4199c5b7f1fdcfb3e2145b346e99b",
"assets/AssetManifest.bin": "3e69aeafb2a0d9ebecedff4e0277f1dc",
"assets/AssetManifest.bin.json": "6a4773891eea541c3aabec5daf9d7a12",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "bfa23b27627bb35e6477e9ee3e48438c",
"favicon.png": "eec01411d759f5c110ca1cfcb68d1160",
"icons/Icon-192.png": "7fe64d7a470e47a3d6213c287a454bc7",
"icons/Icon-512.png": "bec2e8a78f4365bcba226e939231d1a5",
"icons/Icon-maskable-192.png": "7fe64d7a470e47a3d6213c287a454bc7",
"icons/Icon-maskable-512.png": "bec2e8a78f4365bcba226e939231d1a5",
"manifest.json": "45bfe9462d7b5ce42dc923ec26c10a47"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
