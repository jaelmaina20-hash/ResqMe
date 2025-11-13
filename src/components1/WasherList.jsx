import { washers } from "../data/carwashersData";
import Washer from "./Washer";
import washerAd from "../assets/washer2.jpg"
import { Link } from "react-router-dom";

export default function WasherList() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-[rgb(255,245,245)]">
      {washers.map((w) => (
        <Washer key={w.id} washer={w} />
      ))}
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-2xl  md:p-10 border border-[rgb(255,228,230)]">
        <img
          src={washerAd}
          alt="Join as Car Washer"
          className="w-full md:w-1/2 h-90 object-cover rounded-xl mb-6 md:mb-0"
        />

        <div className="md:w-1/2 md:pl-10 text-center md:text-left space-y-4">
          <h2 className="text-[rgb(139,0,0)] text-3xl font-bold">
            Want to Be a Car Washer?
          </h2>
          <p className="text-[rgb(100,0,0)] text-lg">
            Join our growing network of professional car washers. Showcase your
            skills, connect with new clients, and earn on your own schedule.
          </p>
         
          <Link to="/signup" className="bg-[rgb(139,0,60)] hover:bg-[rgb(220,20,60)] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out inline-block">Register</Link>
        </div>
      </div>
    </>
    

    
  );
}
