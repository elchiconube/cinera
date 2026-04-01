import { PLACE_LATITUDE, PLACE_LONGITUDE } from "../consts";

/** Respuesta mínima de Open-Meteo para la tarjeta completa */
export type OpenMeteoForecastCurrent = {
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  weather_code: number;
  is_day: 0 | 1;
};

export type OpenMeteoForecastResponse = {
  current: OpenMeteoForecastCurrent;
};

export const OPEN_METEO_CARD_URL = `https://api.open-meteo.com/v1/forecast?latitude=${PLACE_LATITUDE}&longitude=${PLACE_LONGITUDE}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code,is_day&timezone=Europe%2FMadrid&wind_speed_unit=ms`;

export const OPEN_METEO_MINI_URL = `https://api.open-meteo.com/v1/forecast?latitude=${PLACE_LATITUDE}&longitude=${PLACE_LONGITUDE}&current=temperature_2m,weather_code,is_day&timezone=Europe%2FMadrid`;

export function weatherLabel(
  code: number,
  isDay: boolean,
): { label: string; icon: string } {
  if (code === 0) return { label: "Despejado", icon: isDay ? "☀️" : "🌙" };
  if (code <= 2)
    return { label: "Parcialmente nublado", icon: isDay ? "⛅" : "🌤️" };
  if (code === 3) return { label: "Nublado", icon: "☁️" };
  if (code <= 49) return { label: "Niebla", icon: "🌫️" };
  if (code <= 59) return { label: "Llovizna", icon: "🌦️" };
  if (code <= 69) return { label: "Lluvia", icon: "🌧️" };
  if (code <= 79) return { label: "Nieve", icon: "❄️" };
  if (code <= 82) return { label: "Chubascos", icon: "🌧️" };
  if (code <= 99) return { label: "Tormenta", icon: "⛈️" };
  return { label: "Variable", icon: "🌡️" };
}

export function weatherIcon(code: number, isDay: boolean): string {
  if (code === 0) return isDay ? "☀️" : "🌙";
  if (code <= 2) return isDay ? "⛅" : "🌤️";
  if (code === 3) return "☁️";
  if (code <= 49) return "🌫️";
  if (code <= 69) return "🌧️";
  if (code <= 79) return "❄️";
  if (code <= 82) return "🌧️";
  if (code <= 99) return "⛈️";
  return "🌡️";
}
