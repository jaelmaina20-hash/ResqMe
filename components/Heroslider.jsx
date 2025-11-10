import { useEffect, useState } from "react";
import React from "react";
import image1 from "../src/assets/Image1.jpg";
import image2 from "../src/assets/Image2.jpg";
import image3 from "../src/assets/Image3.jpg";

const slides = [
    {
        image: image1,
        title: "Car trouble? We'll rescue you",
        text: "ResqMe connects you instantly to a nearby mechanic, wherever you are.",
        button: "Get Help Now",  
    },

    {
        image: image2,
        title: "Help is just a tap away",
        text: "Request a certified mechanic in seconds and track their arrival in real time.",
        button: "Track My Mechanic",
    },

    {
        image: image3,
        title: "In the blink of an eye, ResqMe will have you smiling and back on the road!",
        text: "Because every driver deserves peace of mind behind the wheel",
        button: "Book Your Service",
        },
];

export default function Heroslider () {
const [current, setCurrent] = useState(0)

    useEffect(() => {
   const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000)

    return () => clearInterval(timer)
    }, []);

    const slide = slides[current];

    return(

        <div className="relative w-full h-[130vh] overflow-hidden">
            <img src={slide.image} alt="hero" className="absolute w-full h-full object-cover transition-opacity duration-1000 " />
            <div className="absolute bottom-0 w-full text-center py-5 bg-white/80 backdrop-blur-sm">
                <h1 className="text-3xl font-bold mb-2 text-[rgb(139,0,0)]">{slide.title}</h1>
                <p className="text-lg mb-4 font-medium text-[rgb(139,0,0)]">{slide.text}</p>
                <a href="/mechanics" className="bg-[rgb(139,0,0)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(255,0,0)] transition">{slide.button}</a>
            </div>
        </div>

    )
}


