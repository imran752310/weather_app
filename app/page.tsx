import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-black h-[650px] text-center text-white  flex flex-row items-center ">
      <div className="mx-auto">
        <div className="pb-5">
          <h1 className="text-3xl">Weather App</h1>
        </div>

        <form action="" className="">
          <input
            type="text"
            className="border rounded-sm m-5 px-3 py-2 w-[400px]"
            placeholder="Search ..."
          />
          <button className="bg-amber-500 hover:bg-amber-600 rounded-sm px-3 py-2 cursor-pointer">
            Get Weather
          </button>
        </form>

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
            <h2 className="p-4">Pakistan</h2>
            <h1 className="text-4xl">
              <span className="text-sm">🌡️ Temp</span> 23 °C
            </h1>

            <div className="mt-8 grid grid-cols-3">
              <div>🌥️ Condition :</div>
              <div>💨 Wind :</div>
              <div>🌫️ Visibility : </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
