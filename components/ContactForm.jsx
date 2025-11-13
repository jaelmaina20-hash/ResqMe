import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [requestType, setRequestType] = useState("");
  const [emergencyType, setEmergencyType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `You selected "${requestType}".`;

    if (requestType === "Emergency Help") {
      message += `\nEmergency type: ${emergencyType}`;
    } else if (requestType === "Book Service") {
      message += `\nRequested date: ${date}`;
    } else if (requestType === "Request Towing") {
      message += `\nLocation: ${location}`;
    }

    alert(`Form submitted!\n\n${message}`);}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-8xl mx-auto">
    <section className="min-h-screen bg-white flex flex-col items-center py-6 relative overflow-hidden">
    <div className="relative w-full max-w-lg">      
                <div className="mb-4">
                  <h3 className="text-3xl text-center font-bold text-[rgb(139,0,0)] mb-4">
                    Need Help Fast?</h3>
                  <p className="text-gray-700 text-lg ">
                    Submit your request below for{" "}
                    <span className="text-[rgb(139,0,0)] font-semibold">emergency support</span>,{" "}
                    <span className="text-[rgb(139,0,0)] font-semibold">towing</span>, or{" "}
                    <span className="text-[rgb(139,0,0)] font-semibold">service scheduling</span>.  
                    Our team responds immediately to get you the help you need.
                  </p>
                </div>
        </div>
    

      <div className="relative z-10 rounded-2xl w-full max-w-lg p-8 bg-[rgb(255,245,245)] border border-[rgb(255,228,230)]">
        <h2 className="text-3xl font-bold text-[rgb(139,0,0)] text-center mb-8">Quick Assistance Request</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="requestType" className="block text-[rgb(139,0,0)] font-semibold mb-1">Select Assistance Type</label>
            <select id="requestType" required value={requestType} onChange={(e) => setRequestType(e.target.value)} className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition">
              <option value="">Choose an option</option>
              <option value="Emergency Help">Emergency Help</option>
              <option value="Book Service">Book Service</option>
              <option value="Request Towing">Request Towing</option>
            </select>
          </div>

          {/* Emergency Help Fields */}
          {requestType === "Emergency Help" && (
            <div className="space-y-4">
              <label htmlFor="emergencyType" className="block text-[rgb(139,0,0)] font-semibold">Describe the emergency</label>
              <select id="emergencyType" required value={emergencyType} onChange={(e) => setEmergencyType(e.target.value)}className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition">
                <option value="">Select issue</option>
                <option value="Engine smoking">Engine is smoking</option>
                <option value="Brake failure">Brakes are not responding</option>
                <option value="Flat tire">Flat tire</option>
                <option value="Battery dead">Battery is dead</option>
                <option value="Overheating">Car overheating</option>
              </select>

              <button type="submit"className="w-full bg-[rgb(255,0,0)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 ease-in-out">Deploy Help</button>
            </div>
          )}

          {/* Book Service Fields */}
          {requestType === "Book Service" && (
            <div className="space-y-4">
              <label htmlFor="serviceDate" className="block text-[rgb(139,0,0)] font-semibold">Choose a service date</label>
              <input type="date" id="serviceDate"required value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
              <button type="submit" className="w-full bg-[rgb(255,0,0)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 ease-in-out"> Book Service</button>
            </div>
          )}

          {/* Request Towing Fields */}
          {requestType === "Request Towing" && (
            <div className="space-y-4">
              <label htmlFor="location" className="block text-[rgb(139,0,0)] font-semibold">Enter your current location</label>
              <input type="text" id="location" required placeholder="E.g., Nairobi CBD, near Hilton Hotel" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
              <button type="submit" className="w-full bg-[rgb(255,0,0)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg transition-all duration-300 ease-in-out">Request Tow Truck</button>
            </div>
          )}
        </form>
      </div>
    </section>

    <section className="min-h-screen bg-white flex flex-col items-center py-6 relative overflow-hidden">    
      <div className="relative w-full max-w-lg">      
                <div className="mb-4">
                  <h3 className="text-3xl text-center font-bold text-[rgb(139,0,0)] mb-4">
                    General inquiry form</h3>
                  <p className="text-gray-700 text-lg ">
                    Have a 
                    <span className="text-[rgb(139,0,0)] font-semibold"> question</span>,{" "}
                    <span className="text-[rgb(139,0,0)] font-semibold">feedback</span>, or{" "}
                    <span className="text-[rgb(139,0,0)] font-semibold">need routine assistance</span>? Fill out the form below and our support team will reach out within a short time.</p>
                </div>
        </div> 
      
      <div className="relative bg-[rgb(255,245,245)] rounded-2xl w-full max-w-lg p-8 border border-[rgb(255,228,230)]">
        <h2 className="text-3xl font-bold text-[rgb(139,0,0)] text-center mb-8">Drop Us a Line!</h2>

        <form className="space-y-5">
          <div><label htmlFor="firstname"className="block text-[rgb(139,0,0)] font-semibold mb-1">First Name</label>
            <input type="text" id="firstname"required placeholder="Your first name" className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
          </div>

          <div><label htmlFor="lastname" className="block text-[rgb(139,0,0)] font-semibold mb-1">Last Name</label>
            <input type="text" id="lastname" required placeholder="Your last name" className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
          </div>
          <div><label htmlFor="email"className="block text-[rgb(139,0,0)] font-semibold mb-1">Email</label>
            <input type="email" id="email" required placeholder="Your email" className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
          </div>

          <div><label htmlFor="subject" className="block text-[rgb(139,0,0)] font-semibold mb-1">Subject</label>
            <input type="text" id="subject" required placeholder="Subject" className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"/>
          </div>

          <div><label htmlFor="message"className="block text-[rgb(139,0,0)] font-semibold mb-1">Message</label>
            <textarea id="message" required placeholder="Your message" className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"></textarea>
          </div>

          <div className="text-center pt-4">
              <button type="submit" className="bg-[rgb(139,0,60)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg hover:-translate-y-1 transition-all duration-300 ease-in-out">Send Message</button>
          </div>
        </form>
      </div>
    </section>  
   </div> 
  );
}
