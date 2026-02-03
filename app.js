const weatherSlots = [
  {
    time: "09:00",
    condition: "Snow showers",
    temp: "-3°C",
    wind: "Wind chill -9°C",
  },
  {
    time: "12:00",
    condition: "Cloudy",
    temp: "-1°C",
    wind: "Wind chill -6°C",
  },
  {
    time: "15:00",
    condition: "Light snow",
    temp: "-2°C",
    wind: "Wind chill -7°C",
  },
];

const snowSnapshot = {
  top: "110 cm",
  valley: "35 cm",
  lastSnow: "12 cm",
  nextSnow: "Tonight 6–10 cm",
};

const liftSnapshot = {
  openKm: "135 km open",
  closedLifts: ["Dantercepies", "Sasslong"],
  notice: "2 lifts closed due to wind",
};

const weatherGrid = document.getElementById("weather-grid");
weatherSlots.forEach((slot) => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${slot.time}</h3>
    <p class="temp">${slot.temp}</p>
    <p class="meta">${slot.condition}</p>
    <p class="meta">${slot.wind}</p>
  `;
  weatherGrid.appendChild(card);
});

const snowCard = document.getElementById("snow-card");
if (snowCard) {
  snowCard.innerHTML = `
    <p><strong>Top:</strong> ${snowSnapshot.top}</p>
    <p><strong>Valley:</strong> ${snowSnapshot.valley}</p>
    <p><strong>Last 12h:</strong> ${snowSnapshot.lastSnow}</p>
    <p><strong>Next:</strong> ${snowSnapshot.nextSnow}</p>
  `;
}

const liftCard = document.getElementById("lift-card");
if (liftCard) {
  liftCard.innerHTML = `
    <p><strong>${liftSnapshot.openKm}</strong></p>
    <p>${liftSnapshot.notice}</p>
    <p class="muted">Closed lifts: ${liftSnapshot.closedLifts.join(", ")}</p>
  `;
}
