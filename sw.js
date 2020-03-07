self.addEventListener('push', function (event) {

    console.log('Event', event)

    event.waitUntil(


    );
});

self.addEventListener('message', function handler(event) {
    self.clients.matchAll().then(function (clients){
        clients.forEach(function(client) {
            client.postMessage({
                msg: "Hey I just got a fetch from you!",
            });

            self.registration.showNotification('Hey I just got a fetch from you!', {
                body: 'Hey I just got a fetch from you!',
            })
        });
    }); 
});

self.addEventListener('install', function (event) {
    
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim()); // Become available to all pages
});