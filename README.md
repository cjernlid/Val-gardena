# Val Gardena Snow Guide

## Product Overview
The **Val Gardena Snow Guide** is a user-friendly progressive web app (PWA) that provides real-time, centralized, and mobile-friendly snow and mountain condition updates for skiers and snowboarders visiting Val Gardena, Italy. It helps visitors plan their ski day with weather forecasts, avalanche alerts, slope/lift status, snow depth, and more — all in one place.

## Goals
- Centralize fragmented data sources into a single, easy-to-use app.
- Provide real-time, actionable insights for tourists skiing in Val Gardena.
- Improve safety, planning, and enjoyment of ski days through relevant alerts and tips.

## Target Users
**Primary audience:** Ski tourists (casual to intermediate level) visiting Val Gardena for skiing or snowboarding, who are not local experts and want fast, trustworthy information.

## User Pain Points
- Information is scattered across many websites.
- Users don’t know where to check for up-to-date weather, lifts, or avalanche risk.
- Some information is only in German/Italian, or not optimized for mobile.
- They need fast answers in the morning before heading out.

## Core Features
| Feature | Description |
| --- | --- |
| 🧭 Weather Forecast (9, 12, 15) | Real-time forecast for three key hours with temperature, wind chill, and weather symbol. |
| ⚠️ Avalanche Risk Level | Current risk level + description for Val Gardena region. |
| 🏔️ Snowfall Metrics | Snow depth at top & valley, snowfall in last 12h, next snow prediction. |
| ❄️ Lift & Slope Status | Live list of closed lifts and open slope kilometers. |
| 📹 Webcams | Quick access to mountain webcams. |
| 🗺️ Slope Map | Link to PDF slope map for offline planning. |
| 🍽️ Food & Après Tips | Hand-picked restaurant & bar suggestions. |
| 🚌 Next Ski Bus | Real-time or static info for next ski bus (if integration possible else calculated from a timetable). |
| 💡 Tips & Tricks | Local insights for a better ski day experience. |

## Platform & UX
- Progressive Web App (PWA) accessible via web URL.
- Optimized for mobile home screen saving.
- Clean modern UI with weather cards, live stats, and quick links.
- Language: English with Swedish fallback.
- Offline caching for slope map and latest data snapshot.

## Data Sources
| Data | Source/API |
| --- | --- |
| Weather & Wind | `dataset.api.hub.geosphere.at` (GeoSphere). |
| Avalanche Report | `static.avalanche.report` (CAAML JSON feed). |
| Snow Depth | HTML scrape from `bergfex.com` or suggest API. |
| Lift & Slope Status | HTML scrape from `valgardena.it` or suggest API. |
| Live Cams | Static links to `bergfex.com` cameras. |
| Slope Map PDF | Static PDF from `piste-maps.co.uk`. |

## Data Update Frequency
- Weather: Every hour.
- Avalanche: At 06:00, 12:00, and 16:00.
- Snowfall: Last 12h refresh at 07:00, 12:00, and 19:00.
- Lift Status: Live scrape at launch or on refresh.

## Key Screens / UI Modules
1. **Home Dashboard**
   - Weather cards (9, 12, 15).
   - Avalanche card.
   - Snow & slope overview.
2. **Live Conditions**
   - Snow depth, lifts closed, last snowfall.
3. **Local Guide**
   - Food, après-ski, bus tips, slope map.

## Privacy & Legal
- Minimal PII collected (if any).
- Public APIs and scraping — confirm terms of service compliance for each data source.
- Attribution required for:
  - Avalanche.report
  - GeoSphere
  - Valgardena.it
  - Bergfex

## Suggested Timeline
| Phase | Duration |
| --- | --- |
| API Validation & Cleanup | 1 week |
| UI Design & Prototyping | 1 week |
| Frontend Dev (PWA shell) | 2 weeks |
| Integrations & Testing | 1–2 weeks |
| Polish & Launch | 1 week |

## Success Metrics
- 📈 Number of users accessing daily.
- ⏱️ Time to information (under 5 seconds).
- 🔁 Repeat users (installing PWA on mobile).
- 💬 Positive feedback or tips used/shared.

## Future Ideas
- 🗣️ Multi-language support (DE, IT, EN, SE).
- 🧭 Route-based recommendations (ski plan of the day based on weather and snow conditions).
- ⛷️ Integrate user feedback or checklists.
- ☕ Add “open great restaurants nearby” module with geolocation.
