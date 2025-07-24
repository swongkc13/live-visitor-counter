// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7u_MWynUL0532yezX6Nfod3WcRQFcVec",
  authDomain: "livevisitorcounter.firebaseapp.com",
  databaseURL: "https://livevisitorcounter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "livevisitorcounter",
  storageBucket: "livevisitorcounter.appspot.com",
  messagingSenderId: "270361104718",
  appId: "1:270361104718:web:f85ae2af886a11e2ceb1cbf",
  measurementId: "G-ZJJCSPJWY1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const counterRef = db.ref("visitorCount");

// Increment visitor count
counterRef.transaction((currentCount) => {
  return (currentCount || 0) + 1;
});

// Read visitor count and update UI
counterRef.on("value", (snapshot) => {
  const count = snapshot.val();
  document.getElementById("counter").textContent = count;
});