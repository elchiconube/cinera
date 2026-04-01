import { PLACE_LATITUDE, PLACE_LONGITUDE } from "../consts";

const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${PLACE_LATITUDE}&longitude=${PLACE_LONGITUDE}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code,is_day&timezone=Europe%2FMadrid&wind_speed_unit=ms`;

export const weatherLoader = {
  name: "weather-loader",
  async loadCollection() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error fetching weather");
    const data = await res.json();

    return {
      entries: [{ id: "current", data: data.current }],
    };
  },
  async loadEntry({ filter }: { filter: { id: string } }) {
    if (filter.id !== "current") return undefined;

    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error fetching weather");
    const data = await res.json();

    return { id: "current", data: data.current };
  },
};