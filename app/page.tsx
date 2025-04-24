"use client";
import { useState } from "react";
import WeatherCard from "../app/components/WeatherCard";

type WeatherData = {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
  visibility: number;
};

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/weather", {
      method: "POST",
      body: JSON.stringify({ city }),
    });
    const data = await res.json();
    setWeather(data);
  };
  

  return (
    <div className="bg-black h-[650px] text-center text-white flex items-center">
      <div className="mx-auto">
        <h1 className="text-3xl pb-5">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            className="border rounded-sm m-5 px-3 py-2 w-[400px]"
            placeholder="Search City Name ..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 rounded-sm px-3 py-2">
            Get Weather
          </button>
        </form>

        {weather && <WeatherCard {...weather} />}
      </div>
    </div>
  );
}

