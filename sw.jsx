// const cacheName = "my-cache-v1";

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       return cache.addAll([
//         "/",
//         "/index.html",
//         "/manifest.json",
//         "/static/css/main.chunk.css",
//         "/static/js/main.chunk.js",
//         "/static/js/0.chunk.js",
//         "/static/js/bundle.js",
//         "/logo192.png",
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       // Serve cached response if available
//       if (cachedResponse) {
//         return cachedResponse;
//       }

//       // Fetch the resource from the network
//       return fetch(event.request)
//         .then((response) => {
//           // Check if the response is valid
//           if (
//             !response ||
//             response.status !== 200 ||
//             response.type !== "basic"
//           ) {
//             return response;
//           }

//           // Clone the response to use it in both cache and browser
//           const responseToCache = response.clone();

//           // Cache the fetched response
//           caches.open(cacheName).then((cache) => {
//             cache.put(event.request, responseToCache);
//           });

//           return response;
//         })
//         .catch((error) => {
//           console.error("Error fetching from network:", error);

//           // Provide a fallback response for failed network requests
//           // You can customize this fallback response based on your needs
//           return new Response("Offline content goes here.", {
//             headers: { "Content-Type": "text/plain" },
//           });
//         });
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   // Clean up old caches
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((name) => {
//           if (name !== cacheName) {
//             return caches.delete(name);
//           }
//         })
//       );
//     })
//   );
// });
// self.addEventListener("fetch", (event) => {
//   // Assuming your app triggers a full-screen request by making a specific fetch
//   if (event.request.url.endsWith("/requestFullScreen")) {
//     event.respondWith(handleFullScreenRequest(event));
//   }
// });

// async function handleFullScreenRequest(event) {
//   // Perform any necessary logic before granting full-screen permission
//   // For example, check if the user is authenticated or has the necessary permissions

//   // You can use the BroadcastChannel API to communicate with your web app
//   const channel = new BroadcastChannel("fullscreen-channel");

//   // Send a message to the web app to trigger the full-screen request
//   channel.postMessage({ type: "requestFullScreen" });

//   // Wait for the response from the web app
//   const response = await new Promise((resolve) => {
//     channel.onmessage = (event) => {
//       resolve(event.data);
//     };
//   });

//   // Close the channel
//   channel.close();

//   // Return the response to the original fetch event
//   return new Response(JSON.stringify(response), {
//     headers: { "Content-Type": "application/json" },
//   });
// }



const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});