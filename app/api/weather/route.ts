// app/api/weather/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { city } = await req.json();
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();

  return NextResponse.json(data);
}
