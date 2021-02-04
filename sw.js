self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

/*
this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('assets').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});


  this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('dynamic-cache').then(function(cache) {
        return cache.addAll([
        '/js/app.js',
        '/js/chunk-vendors.js',
        'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
        '/img/email-svgrepo-com.cee522e3.svg',
        '/img/whatsapp-svgrepo-com.9ada85f9.svg',
        '/img/ali.7e3a582f.webp',
        '/img/book.bbb0dfa5.webp',
        '/img/sports.8fe5589d.webp',
        '/img/e-sports.371cdf19.webp',
        'https://fonts.gstatic.com/s/bebasneue/v2/JTUSjIg69CK48gW7PXoo9WlhyyTh89Y.woff2',
        '/manifest.json',
        '/favicon.ico'
        ]);
      })
    );
  });

this.addEventListener('fetch', function(event) {
  console.log(event.request.url);})

this.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return fetch(event.request).then(function(response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});
   
*/


