# 🔢 Live Visitor Counter

A simple web app that counts visitors using Firebase Realtime Database and Firebase Hosting.

## 🌐 Live Demo
👉 [https://livevisitorcounter.web.app](https://livevisitorcounter.web.app)

## 🛠 Built With

- **HTML/CSS/JS** – Basic frontend
- **Firebase Realtime Database** – Stores the visitor count in the cloud
- **Firebase Hosting** – Serves the site with global CDN

## 📦 Features

- ✅ Auto-increments counter on each visit
- ✅ Cloud-hosted, live and publicly available
- ✅ Free-tier Firebase deployment
- ✅ Real-time updates with Firebase SDK

## 🚀 How It Works

1. Firebase initializes with config
2. `transaction()` safely increments the `visitorCount`
3. A real-time listener updates the UI instantly
4. Deployed via `firebase deploy`

## 📁 Project Structure
/live-visitor-counter
├── index.html
├── style.css
├── script.js
├── firebase.json
└── .firebaserc