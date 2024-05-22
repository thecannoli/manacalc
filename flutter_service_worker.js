'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "21cc3edac936e8c57b92dff9ced0ecb8",
"version.json": "cec2e9336a0acbe4fb30ab396061bfcc",
"index.html": "558176c82be99eb86fe37bd1f31a1ee7",
"/": "558176c82be99eb86fe37bd1f31a1ee7",
"main.dart.js": "b23f20bb3f9907eaf25f87dff5d4fc48",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "d39dcbd0cd992483cfa02c162e142d75",
"icons/Icon-192.png": "ae1ad2e12a327ec82305a080a50ed44e",
"icons/Icon-maskable-192.png": "ae1ad2e12a327ec82305a080a50ed44e",
"icons/Icon-maskable-512.png": "f59f814389ee1f7ec354dad964dd963c",
"icons/Icon-512.png": "f59f814389ee1f7ec354dad964dd963c",
"manifest.json": "015b49316d9713af3649ea30b653a4fa",
".git/config": "8ef0ec796d31c167a0d2436287f53b48",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/9e/113be806e9cc04346562c1975cbca26f12005a": "1ed96e77490c4a15a4d7397cc56d74df",
".git/objects/69/6841bf950a3b6c32440c1788ff04c658497852": "b4df0f07466231a9f64545c1f94291e5",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/a6ae2cb93f824e7693d68bd7d2de2024b114fb": "44f0ded0641e273221ad80b3d9af9fb3",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/2600d0808a01fa6871c90fb62c343e1404f113": "40ddd15695f6623df7f08a87070e4098",
".git/objects/5a/fe4571e4b86ffc9f4a677f2f895792b5b3b432": "8c79822e7d27b2074834d376e9fd775f",
".git/objects/5f/5040c5aac389bcfccf59af1b7342c1e7ff499e": "84f638db8037bae83f6a8729681db1b0",
".git/objects/05/90e64406c153bfbbaabeb8bc91dd5ec3c5c72e": "67c42d3908d15ca82c05296aeceaecc7",
".git/objects/a3/fb40b35e57cc95bb582995c19811c90ebcb139": "91ac7ba8cec1efa5e880f7215038d78c",
".git/objects/d7/2b3360b484097a54cafaf58919eb48ee647aa6": "769ebd21d4495b3e93830d24bc013532",
".git/objects/d0/5304b45997ebea21dd81bf0a004e3519eb94cc": "b58b69e7115006c02283cbefe0bef4a4",
".git/objects/be/0a2c519fca742ab865593dd4c4665863e820b0": "c1c045a4fff3a49e898abf3fb800bc60",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/f3/5d425e579d3838439641dc04c127437dc85d54": "23002faa814d4720bd1e90d3039159c1",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fc/a861bacbb531c9963a667b99e33845ea6dca4a": "7ce70a05dbd2c8f4d32ccc424e5eac4e",
".git/objects/fd/30d2ea0919fac23fa0b5a95c1794ef8806d408": "c5339a6467b624269306c49e4e11235f",
".git/objects/f5/9ba5e8c23e95a3c9664707ccbbf67ff5b5b594": "ca679563c4a0a2d397b576be5b688bb2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/18/c5ffa4f30143efab2f69c262d177b3893a2c3a": "7b88105be811f767930feb907ed4e9df",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/821c22961a8e41a8a27f5a7f37e78e52ebebd8": "2d4de54c60bcb2a17f44137fec262d8e",
".git/objects/pack/pack-95fdfdb1b549fb17d3bb5bad4933810cf6311c2d.pack": "421f077ac8df8dc5ea4b43ff416352c2",
".git/objects/pack/pack-95fdfdb1b549fb17d3bb5bad4933810cf6311c2d.rev": "d2cbe95fcbd8b2ae964c3aa59c500b74",
".git/objects/pack/pack-95fdfdb1b549fb17d3bb5bad4933810cf6311c2d.idx": "a2adff55b2fa95f6e1ca04ff731b9c14",
".git/objects/4c/774fe9cf7152863835ebdb3546e35d592e37bf": "94b76dc6adfc2d80ca1c9af2049a2e7f",
".git/objects/72/97fe9ab8ecbca0513ffe0f15440301b5122092": "2c28c45dbdbd7d5e92b995be7e2d7d9c",
".git/objects/6b/8d17ae62aa6049914b95743fb807c74b9d18de": "2a61065f9f24e8b86bb7c0299124ccee",
".git/objects/6b/f879f7f2328143e305a597277d5ba5973108e4": "2df7f0dfdc00db9c50df784fc2fed10b",
".git/objects/07/19c19a2ab7ed437d808ed7334f8f415f22e59d": "be838ca8738dc0be9bcb322e9f1e9cfe",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/d69b4803573c898724f7da726c8adc0c46eb18": "f38cecf6ee85423e528511c2c03956c2",
".git/objects/5b/012436416a09c04d0908f8b7939617c2c08302": "eb2bff2dbe56c752c36fe76d9677e1d5",
".git/objects/0f/f7c1a0ea605234d1148d07566f5057201dc75e": "b745727529f33b055b7381f353976062",
".git/objects/d4/0b7bd3256ba1ecebdbdb6a01baaceb40df51fd": "c7c3d14eb59a9c7dfbebb383e1505142",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/819d025a5bc5d8aff887c24a379b5846bb2bbc": "1c23af8a420e9cee1f1182d53a5016ac",
".git/objects/fa/ec12e81c1d7f2cf52d9d81acb70cfb332fbe6a": "ff893ed615bcb150a3251381d2070d04",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/77/f9457102a28b2013cb1dfa29375596edc65b77": "8b14fc872a219bd6b9be1f495060b857",
".git/objects/4a/dffef5e07c9b7cd097e7aeceba5d59afdac504": "56625a7a818ea07d28ab9f86aadd4037",
".git/objects/4f/6eaa84fec51650e4ec77d39893d445406e8af9": "392d6d16907ae1dc87a84a440e37163c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/94d58f6954ed282b4281261ea8e94202646e0c": "4b9208f3c607602d8d0e440d611d8081",
".git/objects/22/2d357ed2fa30345bf1e515371c35b90cd6aae1": "18d42e8421b0a53fbdccc65dfe07032a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c573cd0956e45e20caa0c485685961dc",
".git/logs/refs/heads/main": "c573cd0956e45e20caa0c485685961dc",
".git/logs/refs/remotes/origin/HEAD": "f51ccf44376e8be4a08c6d392aa3031b",
".git/logs/refs/remotes/origin/main": "e2273473b2aff1fab4118cda6e0e4807",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "97ba3c4eded36b864f223944ba7813c3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "97ba3c4eded36b864f223944ba7813c3",
".git/index": "f73e043fb95ba66436d705cc5b112f59",
".git/packed-refs": "85b2156710c1a4145f3e89b6b0f4459b",
".git/COMMIT_EDITMSG": "90ac3249e234c75703fcc182eab53932",
"assets/images/raph-head2.jpg": "2ed27a46da2a79705a644d7caf0d669b",
"assets/images/mana_logo.png": "a8abfbd50c039e15b783f35667e05f41",
"assets/images/mana-calc-business.jpg": "a1d86fc0b06789a9886b51a412c63b0c",
"assets/images/Mana-Bowl-Text.jpeg": "237f095b0985dc8a17dbad6e38403f7d",
"assets/images/raph-head.png": "dbfee6a7ae2ff7f42857cf2d1c00683d",
"assets/images/raph-head.jpeg": "2ed27a46da2a79705a644d7caf0d669b",
"assets/images/Favicon.png": "48cda6767c6b5ee15d99c828f6c52063",
"assets/images/mana-calc-business.jpeg": "a1d86fc0b06789a9886b51a412c63b0c",
"assets/images/raph.png": "f5e3d115146bd1b0efa817c674190057",
"assets/AssetManifest.json": "bcf515825ab793a3352e083bd15c6fbd",
"assets/NOTICES": "087594e014ad7c3579b4c8938f1466b2",
"assets/FontManifest.json": "2df58646f50a24a3385dbfa8a2138e6b",
"assets/AssetManifest.bin.json": "642c0e14d393f87f025fe8b6ff621433",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "98fa018652e3ee866a781b91c7cde53f",
"assets/fonts/Quattrocento_Sans/QuattrocentoSans-Italic.ttf": "90c39f1ed1cc44b5acc2a4fc68f0a359",
"assets/fonts/Quattrocento_Sans/QuattrocentoSans-Regular.ttf": "0dfc93c322920ad5ae6efd6bc570c3cb",
"assets/fonts/Quattrocento_Sans/QuattrocentoSans-BoldItalic.ttf": "dcfe8558cdd37c24ef79a3ee3c22ddda",
"assets/fonts/Quattrocento_Sans/QuattrocentoSans-Bold.ttf": "ba217e099b172f620f4f84f28e136629",
"assets/fonts/MaterialIcons-Regular.otf": "6d527d1e322b0af642b64bb07232c422",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
