self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/js/app.js',
          '/js/chunk-vendors.js',
          'img/ali.7e3a582f.webp',
          'img/book.bbb0dfa5.webp',
          'img/sports.ec56aa0f.webp',
          'img/e-sports.21aea442.png',
          '/img/email-svgrepo-com.cee522e3.svg',
          '/img/whatsapp-svgrepo-com.9ada85f9.svg'
        ]);
      })
    );
   });
