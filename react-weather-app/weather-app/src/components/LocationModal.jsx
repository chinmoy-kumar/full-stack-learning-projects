import { X } from "lucide-react";
import { useState } from "react";

const LocationModals = ({ close }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((positions) => {
      const {latitude, longitude} = positions.coords;
      console.log({latitude, longitude})
    }, (error) => {
      console.log(error);
    },{
      timeout: 10000
    })
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700/60">
      <div className="h-[350px] w-[400px] bg-gray-100 p-5 shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button className="cursor-pointer" onClick={close}>
            <X />
          </button>
        </div>

        <div className="pt-5 text-center">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter you location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-2xl py-3 px-2 mt-3"
            />
            <button
              type="submit"
              className="bg-blue-500 text-gray-100 px-6 py-3 w-full rounded-4xl text-lg hover:scale-105 transition-all delay-100 cursor-pointer"
            >
              Get Weather
            </button>
          </form>
          
          <div className="pt-2 pb-2 text-xl">or</div>
          
          <button
            type="button"
            className="bg-blue-500 text-gray-100 px-6 py-3 w-full rounded-4xl text-lg hover:scale-105 transition-all delay-100 cursor-pointer"
            onClick={handleGeoLocation}
          >
            Use my location
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModals;
