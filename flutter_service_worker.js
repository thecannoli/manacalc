'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3a539b64a74032983ddf4b70c65e05af",
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
".git/index": "f73d3673a4fb1dfe16d0ba636b29a2f8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5bd56822324d274aa05d08ac425ee34f",
".git/logs/refs/heads/main": "5bd56822324d274aa05d08ac425ee34f",
".git/logs/refs/remotes/origin/main": "99fea456b9d2122a1927934b277075ed",
".git/objects/03/d5762691c6d1e93de66ed110aa3114bb85dada": "604b633a2ead2cb3249b5c811b0a7cc9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0d/2902135caece481a035652d88970c80e29cc7e": "dfc8c4c4b7d0a1b6dbadc04d9fa6e6f1",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/a3a5017f048d6d8e6a450eef64435ddee44fb7": "45542fd7e689386f166eed136e1ad478",
".git/objects/2c/6f7fe61c2bf5d1842c6a38e73780a313426400": "336b783c9810207402cb1c189c2de2f1",
".git/objects/32/9bee469368d608beb2abff4e11ba02445a5845": "017f58cb46633ef068b56fe5ee9d8b9e",
".git/objects/3a/83c2f087b9568780f528dbc06b0f83bb14179a": "37f8628f2b9878f5f98c4fdd6429318d",
".git/objects/3c/41bed69ca0cd8fd8aeb2db05dbdc3835c0746f": "7f3e4ceaefdf8d827c97f7e147e553fc",
".git/objects/3e/93413b1348f80307d986c7d9d2c3ff755ff610": "813858e141a159f2d7799c2f02550bea",
".git/objects/42/22ae8f31c2ec49b9886c371cec42f0ec91fe6c": "8d7ad86980b46f24d88d027677bc8a93",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/ea841d61e1781d5e14f47bce25509fb8219a17": "25323b130a8d3ef8d397732d6be81281",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/f10808c9f96fa5c3ceecb2c8c7e48b3cbc829f": "d1c4376e0ff81875da24db14105e1f6b",
".git/objects/60/5a51d81f6b2cb078161deb279c329950245e40": "3573091dfd653fb6078bac86b59f1270",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/b875627030ce7695fd0d1a2f8c10f0d76bb1af": "bd0521ef0817c47fc30ec14377eb3ada",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/0682a3e5efa58b70a845d8cb6691d6b980f6ee": "27424e33297431407fd01961df4f9913",
".git/objects/78/a56e2e552859e813d7c6ff2efe37bfec4c6fe2": "14a41ebd5ccac4a70eac667fd90c8a09",
".git/objects/81/edd03192a065e1e6d4115be0d5677b6f76d66a": "1f546c650ea9ecb61526577b7b64e845",
".git/objects/82/d67c59fe73c3c43720d51e7ba0c5e7123cf57b": "9ef7eb66cc808bce080f42660359c60e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/940891213b854cceb67cedbdf7639ce76192a3": "2a6e9c02e8c3c3a2891f9c15b0c4dc71",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/92/773b3695a45fdfd7b66025276b2451feac8a2a": "b4b967c43a39ed1f59cfcb3916ad9d8d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/b619f889950123de4ab85a2cc2f4ceb14870c9": "29b4e97f8f2d3d672fa8c751e0136cf8",
".git/objects/96/a5ca0887d2b8fa1c5388c4dc719c28a1d33b42": "d143cac2c0ef4a93f2c0e082133d5a9a",
".git/objects/97/c82764b1f3c8a7e94c4920019ea2b47682e38d": "c424ffcfdd20f066016197120d6dac3c",
".git/objects/98/ec02699e59c1f6f534161f971850b26f98cd71": "f4bf9f9a9237c1249fd3dd17523793d8",
".git/objects/99/f1bc9ee5cb2cdb9f7022bf17fda64132330a71": "2da97cf296356be712c4898163c5132a",
".git/objects/9a/4367093462ed3f4773bde02e9167a50ab98776": "f68902d5607dc643813f744a2c449e65",
".git/objects/9e/051123b55f71159599055db667992e498d0b92": "635f158e1ff852876bb914e751a916af",
".git/objects/af/127b14e0144914989dc6d5280b1d81be68f8d7": "29c81fb91c62fdb314ff424b225d222a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/fdabea449e246f8a947b3534910d1a49b6f932": "826dbd22a58eabcd75fb8e7d7826c913",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e1faeaf045d86eac262e24796c2fc9a086daba": "805f9875bd6f4669cb386c00bed7ba75",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/1f529f468ec6b1657fce600f3424af94dbd154": "d48ef28185b0f44e13c2d3ad0fe3bae1",
".git/objects/c5/53ca3dd64ba0200cd08c17ef9ae5182dd99996": "e819a758d671e158742bab10ae7bff05",
".git/objects/c5/aadd70cc2ad3e065de7591204d956db8e672cd": "dce306b153a4818495be73776ca02deb",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cd/2fc307edf94e96a5e6f0d42da2ed3f8bfba164": "6b3be63c4822a498df3995cade98df74",
".git/objects/d2/eaf1d20d0b927f853e92cf9e511a54a038626a": "0e7aee69f00dd066dc8fec0a9d84da76",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/0cc1f0000828746d0cdb10d8fb632d487e4586": "8d4d4c59ded38200dfde11f17c4b1ded",
".git/objects/e4/9901a46f1cffdd655c26b75d17189f42e777a2": "0c949b45077596309dd477abc65c32eb",
".git/objects/e7/e49575acb1271b9a3065e777be2b6d16b81859": "c9ef01ee187502e271800a5841bd644c",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/97aebf60d35274118aedff40705ac5b5de1d23": "4e0f82397436766902d21e33e4cb4eba",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/c676cfc7cfc63366c1b59141a398f33523f44a": "15e3217c786bb04f6ff1742b1490310a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/833a41ba26583373398a2af97601ffbd49f35c": "85fe45f423b4f7b2c05bdb46b64dd6c4",
".git/refs/heads/main": "7437555440270cc353af2f4b631904b7",
".git/refs/remotes/origin/main": "7437555440270cc353af2f4b631904b7",
"assets/AssetManifest.bin": "934dca5153bb6d65456cba9e75a0818e",
"assets/AssetManifest.bin.json": "700cd108fab63dec9fefce01df26ccbd",
"assets/AssetManifest.json": "79c796a7b4cdc4a4017f229aa7c4fa01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/mana_logo.png": "81786e77db771af68c295aa809bb079d",
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
"index.html": "f4bf821194faebb1d90c04d097a1072c",
"/": "f4bf821194faebb1d90c04d097a1072c",
"main.dart.js": "c6c83b684da09b347935a6997491daed",
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
