importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "TWOJE_API_KEY",
  authDomain: "TWOJ_PROJEKT.firebaseapp.com",
  projectId: "TWOJ_PROJEKT",
  messagingSenderId: "TWOJ_SENDER_ID",
  appId: "TWOJE_APP_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192.png"
  });
});
