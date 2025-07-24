const apiUrl = "https://lufjwmatb8.execute-api.eu-north-1.amazonaws.com/prod/counter";

document.getElementById("counter").textContent = "Loading...";

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("counter").textContent = data.count;
  })
  .catch((err) => {
    console.error("Error fetching visitor count:", err);
    document.getElementById("counter").textContent = "Error";
  });