'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "697e873facbf2a0b24a6b5d902292b6b",
".git/config": "078d8894f8a076e74d719492a0e0dee5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c98672c73118dc3621d0d094f50e93e7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f218330f9114ec233e41c2c2cc0aa360",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c63389ff400d340692f560de1e4c281b",
".git/logs/refs/heads/main": "c63389ff400d340692f560de1e4c281b",
".git/logs/refs/remotes/origin/main": "564794357ce85f0c0f16644bc589b859",
".git/objects/03/d5762691c6d1e93de66ed110aa3114bb85dada": "604b633a2ead2cb3249b5c811b0a7cc9",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "45542fd7e689386f166eed136e1ad478",
".git/objects/2c/6f7fe61c2bf5d1842c6a38e73780a313426400": "336b783c9810207402cb1c189c2de2f1",
".git/objects/32/9bee469368d608beb2abff4e11ba02445a5845": "017f58cb46633ef068b56fe5ee9d8b9e",
".git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
".git/objects/3e/93413b1348f80307d986c7d9d2c3ff755ff610": "813858e141a159f2d7799c2f02550bea",
".git/objects/57/ea841d61e1781d5e14f47bce25509fb8219a17": "25323b130a8d3ef8d397732d6be81281",
".git/objects/60/5a51d81f6b2cb078161deb279c329950245e40": "3573091dfd653fb6078bac86b59f1270",
".git/objects/6d/b875627030ce7695fd0d1a2f8c10f0d76bb1af": "bd0521ef0817c47fc30ec14377eb3ada",
".git/objects/78/0682a3e5efa58b70a845d8cb6691d6b980f6ee": "27424e33297431407fd01961df4f9913",
".git/objects/78/a56e2e552859e813d7c6ff2efe37bfec4c6fe2": "14a41ebd5ccac4a70eac667fd90c8a09",
".git/objects/82/d67c59fe73c3c43720d51e7ba0c5e7123cf57b": "9ef7eb66cc808bce080f42660359c60e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/940891213b854cceb67cedbdf7639ce76192a3": "2a6e9c02e8c3c3a2891f9c15b0c4dc71",
".git/objects/92/773b3695a45fdfd7b66025276b2451feac8a2a": "b4b967c43a39ed1f59cfcb3916ad9d8d",
".git/objects/95/b619f889950123de4ab85a2cc2f4ceb14870c9": "29b4e97f8f2d3d672fa8c751e0136cf8",
".git/objects/96/a5ca0887d2b8fa1c5388c4dc719c28a1d33b42": "d143cac2c0ef4a93f2c0e082133d5a9a",
".git/objects/97/c82764b1f3c8a7e94c4920019ea2b47682e38d": "c424ffcfdd20f066016197120d6dac3c",
".git/objects/98/ec02699e59c1f6f534161f971850b26f98cd71": "f4bf9f9a9237c1249fd3dd17523793d8",
".git/objects/9a/4367093462ed3f4773bde02e9167a50ab98776": "f68902d5607dc643813f744a2c449e65",
".git/objects/9e/051123b55f71159599055db667992e498d0b92": "635f158e1ff852876bb914e751a916af",
".git/objects/b6/fdabea449e246f8a947b3534910d1a49b6f932": "826dbd22a58eabcd75fb8e7d7826c913",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/1f529f468ec6b1657fce600f3424af94dbd154": "d48ef28185b0f44e13c2d3ad0fe3bae1",
".git/objects/c5/53ca3dd64ba0200cd08c17ef9ae5182dd99996": "e819a758d671e158742bab10ae7bff05",
".git/objects/c5/aadd70cc2ad3e065de7591204d956db8e672cd": "dce306b153a4818495be73776ca02deb",
".git/objects/cd/2fc307edf94e96a5e6f0d42da2ed3f8bfba164": "6b3be63c4822a498df3995cade98df74",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/0cc1f0000828746d0cdb10d8fb632d487e4586": "8d4d4c59ded38200dfde11f17c4b1ded",
".git/objects/e4/9901a46f1cffdd655c26b75d17189f42e777a2": "0c949b45077596309dd477abc65c32eb",
".git/objects/ea/97aebf60d35274118aedff40705ac5b5de1d23": "4e0f82397436766902d21e33e4cb4eba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/c676cfc7cfc63366c1b59141a398f33523f44a": "15e3217c786bb04f6ff1742b1490310a",
".git/refs/heads/main": "6c9a851a8936009d94d8538ce9f4ef8d",
".git/refs/remotes/origin/main": "6c9a851a8936009d94d8538ce9f4ef8d",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f537719e59d8f91027085e8a482affd",
"/": "5f537719e59d8f91027085e8a482affd",
"main.dart.js": "4d6fe43716afea06b12c9bb528183ef8",
"manifest.json": "79326ff8b7b080e64aab77fb7303afb9",
"version.json": "cec2e9336a0acbe4fb30ab396061bfcc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
