import React from "react";
import about from "../src/assets/about.jpg";

export default function About() {
  return (
    <section className="relative w-full">
      <div className="relative">
        <img src={about} alt="Mechanic assisting a driver" className="w-full h-[99vh] object-cover brightness-50 z-0"/>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white space-y-10 z-15">

          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-extrabold">About Us</h2>
            <p className="text-base md:text-lg leading-relaxed">
              ResqMe is a digital platform that connects drivers with trusted mechanics and car washers in their area.
              We are committed to making car care fast, reliable, and convenient by linking motorists to verified service
              providers when and where they need them. Whether it's routine maintenance or an unexpected breakdown,
              ResqMe ensures that safe, professional help is just a click away.</p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/60 pb-3 md:pb-0 pr-0 md:pr-6">
              <h3 className="text-2xl font-semibold">Mission</h3>
              <p className="text-base md:text-lg leading-relaxed">
                To connect motorists with trusted mechanics and car washers, quickly and conveniently.</p>
            </div>

            <div className="space-y-2 pl-0 md:pl-6">
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="text-base md:text-lg leading-relaxed">
                To make reliable car care accessible to every driver, everywhere.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
