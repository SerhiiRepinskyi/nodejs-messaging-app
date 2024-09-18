importScripts(
  "https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBOw--CMJ93LP2LLjTXEAVxhFrRD5xangE",
  authDomain: "nodejs-messaging-app.firebaseapp.com",
  projectId: "nodejs-messaging-app",
  storageBucket: "nodejs-messaging-app.appspot.com",
  messagingSenderId: "835564132784",
  appId: "1:835564132784:web:41605abf5d5e336afc1e75",
  measurementId: "G-S49PHBFPQV",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
