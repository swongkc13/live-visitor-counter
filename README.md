# 🔢 Live Visitor Counter (Serverless Edition)

A cloud-native web app that tracks page visits using AWS Lambda, DynamoDB, and API Gateway — all from a static frontend deployed via Firebase Hosting.

---

## 🌐 Live Demo

👉 [https://livevisitorcounter.web.app](https://livevisitorcounter.web.app)

---

## 🛠️ Tech Stack

| Layer        | Tech                            |
|--------------|----------------------------------|
| Frontend     | HTML, CSS, JavaScript (Vanilla) |
| Backend      | AWS Lambda (Node.js 18.x)        |
| Database     | DynamoDB                        |
| API Gateway  | Public HTTP endpoint             |
| Hosting      | Firebase Hosting (Free Tier)     |

---

## 🔄 Architecture

- User visits page → frontend calls AWS API
- API Gateway triggers Lambda
- Lambda increments `count` in DynamoDB
- Response shown in real time on the UI

---

## 📁 File Structure
/live-visitor-counter
├── index.html
├── style.css
├── script.js
├── firebase.json
├── .firebaserc
└── lambda/
├── index.js
├── node_modules/
└── package.json