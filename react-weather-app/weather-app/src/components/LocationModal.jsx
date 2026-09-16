import { X } from "lucide-react";

const LocationModals = ({close}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700/60">
      <div className="h-[300px] w-[400px] bg-gray-100 p-5 shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button className="cursor-pointer" onClick={close}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModals;
