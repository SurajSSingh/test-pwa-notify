document.addEventListener('DOMContentLoaded', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(function (registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function (err) {
                console.log('Service Worker registration failed:', err);
            });
    }

    var requestPermissionButton = document.getElementById('request-permission');
    requestPermissionButton.addEventListener('click', function () {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Unable to get permission to notify.');
            }
        });
    });

    var sendNotificationButton = document.getElementById('send-notification');
    sendNotificationButton.addEventListener('click', function () {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('Immediate Notification', {
                body: 'Bzz bzz bzz bzz',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: "sample",
            });
        });
    });

    var delayNotificationButton = document.getElementById('delay-notification');
    delayNotificationButton.addEventListener('click', function () {
        setTimeout(function () {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification('Delayed Notification', {
                    body: 'This is a delayed notification',
                    tag: "delayed",
                });
            });
        }, 8000);
    });
});
