import { mechanics } from "../data/mechanics";
import Mechanic from "../components1/Mechanic";
import mechanicAd from "../assets/Mechanic4.jpg"

export default function MechanicsList() {
  return (
      <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-[rgb(255,245,245)]">
      {mechanics.map((mech) => (<Mechanic key={mech.id} mechanic={mech} />))}
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg md:p-10 border border-[rgb(255,228,230)]">
  <img src={mechanicAd} alt="Join as Mechanic" className="w-full md:w-1/2 h-90 object-cover rounded-xl mb-6 md:mb-0"/>

  <div className="md:w-1/2 md:pl-10 text-center md:text-left space-y-4">
    <h2 className="text-[rgb(139,0,0)] text-3xl font-bold"> Want to Be a Mechanic?</h2>
    <p className="text-[rgb(100,0,0)] text-lg">Join our trusted network of professional mechanics. Get access to clients near you, grow your reputation, and build a successful career with flexibility and support.</p>
    <button className="bg-[rgb(139,0,60)] hover:bg-[rgb(220,20,60)] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">Register</button>
  </div>
</div>

    </>
  );
}
