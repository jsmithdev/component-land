// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function(e) {
    /* e.waitUntil(
      caches.open('lwcland').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/0.app.js',
          '/app.js',
          '/resources/favicon.ico',
          '/resources/lwc.png'
        ])
      })
    ) */
})


// eslint-disable-next-line no-restricted-globals
/* self.addEventListener('fetch', function(event) {

    console.log(event.request.url)

    event.respondWith(

        caches.match(event.request).then(function(response) {
            
            //return response || fetch(event.request);
            return fetch(event.request);
        })
    )
}) */