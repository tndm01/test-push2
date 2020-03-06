self.addEventListener('push', function (event) {

    console.log('Event', event)

    event.waitUntil(

        self.registration.showNotification('ServiceWorker Cookbook', {
            body: 'Alea iacta est',
        })
    );
});

self.addEventListener('message', function handler(event) {
    console.log('postMessage received', event);
});

self.addEventListener('install', function (event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});