import towingImg from "../src/assets/Towing.jpg"
import mechanicImg from "../src/assets/Mechanic.jpg"
import carwashImg from "../src/assets/Carwasher.jpg"
import emergencyImg from "../src/assets/Emergency.jpg"
import { Link } from "react-router-dom"
const services = [
    {
        title: "Mechanics",
        description: "Expert repair and maintenance from trusted professionals.",
        button: "Find a Mechanic",
        img: mechanicImg, 
        link: "/mechanics",
    },

    {
        title: "Car Washers",
        description: "Keep your car spotless with top-rated car wash services.",
        button: "Book a Wash",
        img: carwashImg,
        link: "/carwashers",
    },

    {
        title: "Towing",
        description: "Fast and reliable towing whenever you need assistance.",
        button: "Request Towing",
        img: towingImg,
        link: "/contact",
    },

    {
        title: "Emergency Help",
        description: "24/7 roadside help and rescue, always ready for you.",
        button: "Get Help Now",
        img: emergencyImg,
        link: "/contact",
    },
];

export default function Services () {

    return(
       <section className="bg-[rgb(255,245,245)] py-16 px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center text-[rgb(139,0,0)] mb-10">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group h-96">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-200 mb-4">{service.description}</p>                        
                        <Link to={service.link}className="bg-[rgb(139,0,60)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(255,69,58)] transition-all duration-300 inline-block">{service.button}</Link>
                    </div>
                </div>
            ))}
            </div>
        
       </section> 
    )
}