var notifyButton = document.querySelector('#notify-button');

    var swRegistration = null;

    function notifyMe() {
        if (!("Notification" in window)) {
            alert("This browser does not support system notifications");
        }
        else if (Notification.permission === "granted") {
            notify();
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === "granted") {
                    notify();
                }
            });
        }

        function notify() {
            const title = 'Anh Nhan Oiiiiiiii!';
            const options = {
                body: 'Sao anh dep trai cute qua zzz.\nAhihi :)'
            };
            swRegistration.showNotification(title, options);
        }

    }

    $("#notify-button").click(function () {
        //$.ajax({
        //    url: '/TEST/PushNotification',
        //    type: 'POST',
        //    dataType: 'json',
        //    success: function (res) {
        //        if (res.Success) {
        //            alert('Push notification SUCCESS!');
        //        }
        //    },
        //    error: function () {
        //        ('Push notification ERROR!');
        //    }
        //});
        //document.querySelector('#notify-button').addEventListener('click', () => {
        //    window.caches.open(myCache)
        //      .then(cache => cache.addAll(content))
        //      .then(() => alert('content is now available offline'))
        //      .catch(() => alert('oh noes! something went wrong'));
        //});

        notifyMe();

        //const title = 'Simple Title';
        //const options = {
        //    body: 'Simple piece of body text.\nSecond line of body text :)'
        //};
        //swRegistration.showNotification(title, options);
    });
    $("#clear-button").click(function () {
        Push.clear();
    });
    $("#check-button").click(function () {
        console.log(Push.Permission.has());
    });

    ////Notification
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        console.log('Service Worker and Push is supported');

        navigator.serviceWorker.register('/sw.js').then(function (swReg) {

            if (swReg.active) {
                //send_message_to_sw();
            }

            swRegistration = swReg;

        })
        .catch(function (error) {
            console.error('Service Worker Error', error);
        });

        function send_message_to_sw(msg) {
            $.ajax({
                url: '/TEST/GetPushNotification',
                type: 'GET',
                success: function (res) {
                    if (res.Success) {
                        navigator.serviceWorker.controller.postMessage(res.Data);
                    }
                },
                error: function () {
                    ('Push data ERROR!');
                }
            });

        }

    } else {
        console.warn('Push messaging is not supported');
        pushButton.textContent = 'Push Not Supported';
    }


    ////Notification
    //notifyButton.addEventListener('click', function () {
    //    const title = 'Simple Title';
    //    const options = {
    //        body: 'Simple piece of body text.\nSecond line of body text :)'
    //    };
    //    swRegistration.showNotification(title, options);

    //});