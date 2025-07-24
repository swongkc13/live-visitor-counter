# 🔢 Live Visitor Counter + Analytics Viewer

A cloud-native web app that tracks page visits, stores detailed analytics in DynamoDB, and displays logs via a serverless API and frontend viewer.

---

## 🌐 Live Demo

- Visitor Counter: 👉 [https://livevisitorcounter.web.app](https://livevisitorcounter.web.app)
- Visitor Logs: 👉 [https://livevisitorcounter.web.app/logs.html](https://livevisitorcounter.web.app/logs.html)

---

## 🛠️ Tech Stack

| Layer      | Technology                       |
|------------|----------------------------------|
| Frontend   | HTML/CSS/JS (Firebase Hosting)   |
| Backend    | AWS Lambda (Node.js)             |
| Database   | DynamoDB                         |
| API Access | API Gateway                      |
| CI/CD      | Manual Deploy via CLI (Firebase) |

---

## 🔄 Architecture

- On visit:
  - `/counter` triggers Lambda to increment a count
  - Visit metadata is logged to a `visits` table
- On `logs.html` load:
  - Fetches `/logs` from API Gateway
  - Displays analytics in a table

---

## 📁 File Structure
/live-visitor-counter
├── index.html
├── script.js
├── logs.html         
├── style.css
├── firebase.json
├── .firebaserc
└── lambda/
├── incrementVisitorCount/index.js
└── getVisitorLogs/index.js