import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Mechanic({ mechanic }) {
  const handleCheckAvailability = () => {
    const isAvailable = Math.random() < 0.5;

    if (isAvailable) {
      toast.success("A mechanic is available! Connecting you now...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      toast.error("All mechanics are currently busy. Try again soon.", {
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
      <img src={mechanic.image} alt={mechanic.name} className="w-full h-90 object-cover"/>
      <div className="p-4 text-[rgb(139,0,0)]">
        <h3 className="text-xl font-bold">{mechanic.name}</h3>
        <p className="text-sm italic">{mechanic.type}</p>
        <p className="mt-2 text-gray-600"><span className="font-semibold">Location:</span> {mechanic.location}</p>
        <p className="text-gray-600 mb-4"><span className="font-semibold">Rating:</span> {mechanic.rating}</p>

        <button onClick={handleCheckAvailability} className="w-50 bg-[rgb(139,0,60)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 ease-in-out">Call Mechanic</button>        
        <ToastContainer />
      </div>
    </div>
  );
}
