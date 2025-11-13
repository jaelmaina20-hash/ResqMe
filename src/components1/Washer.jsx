import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Washer({ washer }) {
  const handleCheckAvailability = () => {
    const isAvailable = washer.status === "available";

    if (isAvailable) {
      toast.success("This washer is available! Connecting you now...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      toast.error("This washer is currently busy. Try again soon.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={washer.image} alt={washer.name} className="w-full h-90 object-cover"/>
      <div className="p-4 text-[rgb(139,0,0)]">
        <h3 className="text-xl font-bold">{washer.name}</h3>
        <p className="text-sm italic">{washer.type}</p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">Location:</span> {washer.location}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Rating:</span> {washer.rating}
        </p>
        {/* <p
          className={`mt-2 font-semibold ${
            washer.status === "available" ? "text-green-600" : "text-red-600"
          }`}
        >
          {washer.status === "available" ? "Available" : "Unavailable"}
        </p> */}

        <button
          onClick={handleCheckAvailability}
          className="mt-4 bg-[rgb(139,0,60)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(255,69,58)] transition-all duration-300">Call Washer</button>        
        <ToastContainer />
      </div>
    </div>
  );
}
