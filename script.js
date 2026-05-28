async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "6b55f22cad5194d715591c86b085424e";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  if (Number(data.cod) === 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } else {
    document.getElementById("result").innerHTML = "City not found ❌";
  }
}