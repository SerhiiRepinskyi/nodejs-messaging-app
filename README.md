# NodeJS Messaging App

## Description

This project is a test task.

## Features

1. Web form for sending messages (title and message body).
2. Send messages via **socket.io** to the first Node.js service.
3. Send messages via **UDP** to the second Node.js service.
4. Return the processed message to the web application via **Firebase Cloud Messaging** (FCM).

## Technologies Used

- **Node.js**
- **Express**
- **socket.io**
- **UDP**
- **Firebase Cloud Messaging (FCM)**
- **Firebase Admin SDK**

## Project Structure

- `index.html`: The web page with a form for sending messages.
- `server.js`: The first Node.js service that receives messages via socket.io and forwards them via UDP.
- `udp-server.js`: The second Node.js service that receives messages via UDP, processes them, and sends them back via FCM.
- `firebase-messaging-sw.js`: The Service Worker for handling messages via FCM.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/SerhiiRepinskyi/nodejs-messaging-app-test.git

2. Navigate to the project directory:

   ```bash
   cd nodejs-messaging-app-test

3. Install dependencies for the services:

    ```bash
    npm install

4. Run the Node.js services:

- To run the first service:

   ```bash
   node server.js

- To run the second service:

   ```bash
   node udp-server.js

5. Open `index.html` in your browser to interact with the web application.

## Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Update the Firebase configuration in the `index.html` file with your project data.
3. Generate VAPID keys in the Firebase settings and insert them into the appropriate place in the code.
4. Create a `firebase-service-account.json` file in the root of the project with your Firebase service account data.
5. Add the `firebase-service-account.json` file to `.gitignore` to avoid committing sensitive data.

## Example Usage

1. Open the web page.
2. Enter a title and message body in the form.
3. Submit the message. The message will be passed through the Node.js services, processed, and returned via FCM to the web application.

## License

This project is licensed under the MIT License.
