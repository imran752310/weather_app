"use client";
import { useState } from "react";
import Image from "next/image";


type WeatherData = {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  visibility: number;
};


export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null); // You can improve typing later
  const [city, setCity] = useState("");

  const apiKey = "bf475a30915b471d96a2081294963fa3"; // Replace with your API key

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.city as HTMLInputElement;
    const cityName = input.value.trim();

    if (cityName) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Error: Invalid city name");
    }
  };

  return (
        <div className=" bg-black h-[650px] text-center text-white  flex flex-row items-center ">
          <div className="mx-auto">
            <div className="pb-5">
              <h1 className="text-3xl">Weather App</h1>
            </div>
    
            <form onSubmit={handleSubmit} className="">
              <input
                type="text"
                name="city"
                className="border rounded-sm m-5 px-3 py-2 w-[400px]"
                placeholder="Search City Name ..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button type="submit" className="bg-amber-500 hover:bg-amber-600 rounded-sm px-3 py-2 cursor-pointer">
                Get Weather
              </button>
            </form>
            
            {weather && weather.main && (
            <div className="w-[100%] h-[300px] rounded-3xl bg-gray-600 my-10">
              <div>
                <Image
                  src="image/cloud-sun.svg"
                  alt="Hero image showing the app"
                  className="mx-auto"
                  width={100}
                  height={100}
                  priority
                />
                <h2 className="p-4">Weather in {weather.name}</h2>
                <h1 className="text-4xl">
                  <span className="text-sm">🌡️ Temp</span> {
              weather.main.temp
                } °C
                </h1>
    
                <div className="mt-8 grid grid-cols-3">
                  <div>🌥️ Condition : {weather.weather[0].description}</div>
                  <div>💨 Wind : {weather.wind.speed} m/s</div>
                  <div>🌫️ Visibility : {weather.visibility / 1000} km</div>
                </div>
              </div>
            </div>
             )}
          </div>
        </div>
      );
    }





