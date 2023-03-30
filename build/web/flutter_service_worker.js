'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js": "e72105937a8da1f24e167e95cae87836",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "c3188254d41833e027b53a5c4231ea2e",
"assets/assets/images/course.png": "689911df06e5c756df456b19812bd44e",
"assets/assets/images/instructor.png": "bde78d43829ebff601c356942d6529bd",
"assets/assets/images/course1.png": "60b984271e604adaf866a218dc69e0ca",
"assets/assets/images/instructor1.png": "9be78df1d975f7cfd71cfc2ebdd5bdc3",
"assets/assets/images/ganesha/Ganesh34.jpeg": "5a466fc83e21cf0e22b107fa1d429c17",
"assets/assets/images/ganesha/Ganesh31.jpeg": "f8fc64ebbf2436241dd289b149922e50",
"assets/assets/images/ganesha/Ganesh22.jpeg": "f894f1ae9dc91a7915f017fd27a688dc",
"assets/assets/images/ganesha/Ganesh18.jpeg": "6b74dcabacb794099ac1674143181272",
"assets/assets/images/ganesha/Ganesh14.jpeg": "1718d07f66e13ca03119f4435b6cbb97",
"assets/assets/images/ganesha/Ganesh21.jpeg": "d819880e17c669260f8b7a325aa96fad",
"assets/assets/images/ganesha/Ganesh30.jpeg": "e9f80a4306e3eb76f3d00daa8e126fe0",
"assets/assets/images/ganesha/Ganesh4.jpeg": "b405ea23819fa65867a5dbfe53692b4d",
"assets/assets/images/ganesha/Ganesh2.jpeg": "3db727806c0ea2ff11c5c94ae9b6f982",
"assets/assets/images/ganesha/Ganesh17.jpeg": "f60f1562600758214c15d02ad392e5b2",
"assets/assets/images/ganesha/Ganesh26.jpeg": "ebb8adedeea9fafd511bd897f178e316",
"assets/assets/images/ganesha/Ganesh23.jpeg": "140b04401670c5abe08e614144a2c421",
"assets/assets/images/ganesha/Ganesh25.jpeg": "799ee99b03a2ece2e2679bce1df8f0f7",
"assets/assets/images/ganesha/Ganesh12.jpeg": "99254b7f9d1868173e3fddb575523809",
"assets/assets/images/ganesha/Ganesh3.jpeg": "0659e060319886bdd55e4672fceaadde",
"assets/assets/images/ganesha/Ganesh6.jpeg": "b4af548c76134a4f4039485016abcfca",
"assets/assets/images/ganesha/Ganesh28.jpeg": "8f835f3d04c0839c04b24c1eb9309143",
"assets/assets/images/ganesha/Ganesh32.jpeg": "9247e4fd02e9ed71974c073a4edf7d2c",
"assets/assets/images/ganesha/Ganesh1.jpeg": "6420f7b305afce6542a3632fc262e34d",
"assets/assets/images/ganesha/Ganesh24.jpeg": "c1ef0f6fc40a543c2eec4bc79989f29b",
"assets/assets/images/ganesha/Ganesh13.jpeg": "d6a3828f6e28f65be0945dfbe8688784",
"assets/assets/images/ganesha/Ganesh10.jpeg": "64e84ee8ec712d9acf7cefaa731995d5",
"assets/assets/images/ganesha/Ganesh11.jpeg": "d263b973d251957b37745b489a27e886",
"assets/assets/images/ganesha/Ganesh8.jpeg": "fe3409a1b4de7804910f6572cc06c659",
"assets/assets/images/ganesha/Ganesh5.jpeg": "fc3f803939ec2b4d4b1269b580bf74a7",
"assets/assets/images/ganesha/Ganesh33.jpeg": "86383ba344a72e865b90b938a3deb0bb",
"assets/assets/images/ganesha/Ganesh19.jpeg": "667e512b0c03a29ed91efc3ab0eaab7a",
"assets/assets/images/ganesha/Ganesh9.jpeg": "e29cb6970b77c567765eb45148f86be5",
"assets/assets/images/ganesha/Ganesh16.jpeg": "c7cfc5f3bb0ea67d4a0fc7b34e0492ec",
"assets/assets/images/ganesha/Ganesh27.jpeg": "447244584ef80a7acbd601edecf44d22",
"assets/assets/images/ganesha/Ganesh15.jpeg": "84ba8b4cc0dbeaf8bbf26b5c326bcc36",
"assets/assets/images/ganesha/Ganesh20.jpeg": "d88ccb1a9ce117506a8162d42504f016",
"assets/assets/images/ganesha/Ganesh7.jpeg": "2ffdfe98448a86647f09ba4632a97ddb",
"assets/assets/images/ganesha/Ganesh29.jpeg": "4af25670e77689c7b98a7a7cb99be35b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "bc8d14e562118ed8bb416b1663bb1cdb",
"version.json": "e9f441da3b4380e899cf65a3851fc222",
"manifest.json": "5ab2a40d604b16204c48c3a0677a9085",
"index.html": "029640072831a28c584df5c38fb4d890",
"/": "029640072831a28c584df5c38fb4d890",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
