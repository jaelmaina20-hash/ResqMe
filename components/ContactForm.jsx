import React from "react";

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[rgb(255,245,245)] via-white to-[rgb(255,240,240)] opacity-70 blur-2xl z-0"></div>

      <div className="relative bg-white z-10 shadow-2xl rounded-2xl w-full max-w-lg p-8 border border-[rgb(255,228,230)]">
        <h2 className="text-3xl font-bold text-[rgb(139,0,0)] text-center mb-8">
          Drop Us a Line!
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="firstname"
              className="block text-[rgb(139,0,0)] font-semibold mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              required
              placeholder="Your first name"
              className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-[rgb(139,0,0)] font-semibold mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              required
              placeholder="Your last name"
              className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[rgb(139,0,0)] font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Your email"
              className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[rgb(139,0,0)] font-semibold mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Subject"
              className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[rgb(139,0,0)] font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Your message"
              className="w-full border border-[rgb(250,128,114)] rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[rgb(255,69,58)] transition"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[rgb(255,0,0)] hover:bg-[rgb(220,20,60)] text-white font-bold py-3 px-10 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
