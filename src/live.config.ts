// src/live.config.ts — solo colecciones live
import { defineLiveCollection } from "astro:content";
import { weatherLoader } from "./loaders/weatherLoader";

export const collections = {
  weather: defineLiveCollection({ loader: weatherLoader }),
};