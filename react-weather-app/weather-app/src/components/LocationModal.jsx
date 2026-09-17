import { X } from "lucide-react";
import { useState } from "react";
import { getGeoLocation } from "../services/get-geolocaiton";
import { useNavigate } from "react-router";

const LocationModals = ({ close }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const goToPage = (location) => {
    navigate("/weatherDetails", { state: { location } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    // console.log(value);
    if (!value) {
      setError("Please enter a city name");
      return;
    }
    try {
      const location = await getGeoLocation(value);
      // console.log(result)
      if (!location) {
        setError("Geolocation request failed!");
      }
      goToPage(location);
    } catch (error) {
      setError(error);
    }
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        // console.log({latitude, longitude})
        goToPage({ name: "Your locations", lat: latitude, long: longitude });
      },
      (error) => {
        setError("Please turn on location permission");
      },
      {
        timeout: 10000,
      },
    );
  };

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
        
        {error && <p className="text-red-600 font-bold text-center mt-2">{error}</p>}

      </div>
    </div>
  );
};

export default LocationModals;
