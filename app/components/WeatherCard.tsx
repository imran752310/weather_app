import Image from "next/image";

type WeatherProps = {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
  visibility: number;
};

export default function WeatherCard({
  name,
  main,
  weather,
  wind,
  visibility,
}: WeatherProps) {
  if (!main || !weather || weather.length === 0) return null;

  return (
    <div className="w-[100%] h-[300px] rounded-3xl bg-gray-600 my-10">
      <div>
        <Image
          src="/image/cloud-sun.svg"
          alt="Weather icon"
          className="mx-auto"
          width={100}
          height={100}
          priority
        />
        <h2 className="p-4">Weather in {name}</h2>
        <h1 className="text-4xl">
          <span className="text-sm">🌡️ Temp</span> {main.temp} °C
        </h1>
        <div className="mt-8 grid grid-cols-3">
          <div>🌥️ Condition: {weather[0].description}</div>
          <div>💨 Wind: {wind.speed} m/s</div>
          <div>🌫️ Visibility: {visibility / 1000} km</div>
        </div>
      </div>
    </div>
  );
}
