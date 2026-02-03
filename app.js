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
  lastSnow: "Loading…",
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
    <h3><span class="icon">⏱️</span>${slot.time}</h3>
    <p class="temp">${slot.temp}</p>
    <p class="meta"><span class="icon">🌤️</span>${slot.condition}</p>
    <p class="meta"><span class="icon">💨</span>${slot.wind}</p>
  `;
  weatherGrid.appendChild(card);
});

const snowCard = document.getElementById("snow-card");

function renderSnowCard() {
  if (!snowCard) {
    return;
  }
  snowCard.innerHTML = `
    <p><strong>Top:</strong> ${snowSnapshot.top}</p>
    <p><strong>Valley:</strong> ${snowSnapshot.valley}</p>
    <p><strong>Last 12h:</strong> ${snowSnapshot.lastSnow}</p>
    <p><strong>Next:</strong> ${snowSnapshot.nextSnow}</p>
  `;
}

async function loadSnowLast12h() {
  const secedaLat = 46.5833;
  const secedaLon = 11.7167;
  const nowcastUrl =
    "https://dataset.api.hub.geosphere.at/v1/timeseries/forecast/nowcast-v1-15min-1km" +
    `?lat_lon=${secedaLat},${secedaLon}&parameters=rr&output_format=geojson`;

  try {
    const response = await fetch(nowcastUrl);
    if (!response.ok) {
      throw new Error(`Snowfall request failed: ${response.status}`);
    }

    const snowData = await response.json();
    const feature = snowData.features?.[0];
    const params = feature?.properties?.parameters;
    const timestamps = snowData.timestamps || [];

    let totalSnowLast12h = 0;
    if (params?.rr?.data) {
      const now = new Date();
      for (let i = 0; i < timestamps.length; i += 1) {
        const forecastTime = new Date(timestamps[i]);
        const hoursDiff = (now - forecastTime) / (1000 * 60 * 60);
        if (hoursDiff >= 0 && hoursDiff <= 12) {
          totalSnowLast12h += params.rr.data[i] || 0;
        }
      }
    }

    snowSnapshot.lastSnow = `${totalSnowLast12h.toFixed(1)} mm`;
  } catch (error) {
    console.error(error);
    snowSnapshot.lastSnow = "Unavailable";
  }

  renderSnowCard();
}

renderSnowCard();
loadSnowLast12h();

const liftCard = document.getElementById("lift-card");
if (liftCard) {
  liftCard.innerHTML = `
    <p><strong>${liftSnapshot.openKm}</strong></p>
    <p>${liftSnapshot.notice}</p>
    <p class="muted">Closed lifts: ${liftSnapshot.closedLifts.join(", ")}</p>
  `;
}
