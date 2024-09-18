import admin from "firebase-admin";
import serviceAccount from "./firebase-service-account.json" assert { type: "json" };

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const messaging = admin.messaging();

export { messaging };
