import { useState } from "react";
import LocationModals from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-blue-300 font-extrabold text-6xl">
          NextLevel <span className="text-blue-500"> Weather App</span>
        </h1>
        <p className="text-gray-400 text-md px-2 py-4">
          Check your weather today in next level
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setClick(true)}
          className="bg-blue-500 text-gray-100 px-6 py-3 rounded-4xl text-lg hover:scale-105 transition-all delay-100 cursor-pointer">Check Weather</button>
      </div>
      {click && <LocationModals close = {() => {setClick(false)}}/>}
    </div>
  );
};

export default Home;
