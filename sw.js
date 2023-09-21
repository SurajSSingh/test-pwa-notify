self.addEventListener('push', function (event) {
    var options = event.data.json().options;
    event.waitUntil(self.registration.showNotification(event.data.json().title, options));
});
