self.addEventListener('push', function (event) {

    console.log('Event', event)

    event.waitUntil(


    );
});

self.addEventListener('install', function (event) {
    console.log('installed!');
});
self.addEventListener('activate', function (event) {
    console.log('activated!');
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
