import { mechanics } from "../data/mechanics";
import Mechanic from "../components1/Mechanic";

export default function MechanicsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-[rgb(255,245,245)]">
      {mechanics.map((mech) => (<Mechanic key={mech.id} mechanic={mech} />))}
    </div>
  );
}
