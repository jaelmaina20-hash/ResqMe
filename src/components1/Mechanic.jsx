export default function Mechanic({ mechanic }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={mechanic.image} alt={mechanic.name} className="w-full h-56 object-cover"/>
      <div className="p-4 text-[rgb(139,0,0)]">
        <h3 className="text-xl font-bold">{mechanic.name}</h3>
        <p className="text-sm italic">{mechanic.type}</p>
        <p className="mt-2 text-gray-600"><span className="font-semibold">Location:</span> {mechanic.location}</p>
        <p className="text-gray-600"><span className="font-semibold">Rating:</span> ⭐ {mechanic.rating}</p>
        <p className={`mt-2 font-semibold ${mechanic.status === "available" ? "text-green-600" : "text-red-600"}`}>{mechanic.status === "available" ? "Available" : "Unavailable"}</p>
      </div>
    </div>
  );
}
