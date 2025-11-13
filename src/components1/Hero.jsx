import hero from "../assets/Hero.jpg"
import mec from "../assets/Mechanic7.jpg"
import wash from "../assets/washer4.jpg"
import tow from "../assets/tow.jpg"
import emergency from "../assets/emergency2.jpg"
import inspection from "../assets/inspection.jpg"


export default function Hero () {

    return (
        <>
        <section className="relative h-[110vh] flex items-center bg-cover bg-center" style={{backgroundImage: `url(${hero})`}}>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Here for you, <span className="block text-[rgb(255,99,71)]"> not just your car</span></h1>
        </div> 
        </section>
        <section className="bg-[rgb(255,245,245)] py-16 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="flex justify-center">
                <img src={mec} alt="mechanic" className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"/>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[rgb(139,0,0)] mb-4">Mechanics</h2>
                <p className="text-gray-700 leading-relaxed text-lg">Our mechanics are certified professionals, each specialized in different areas of automotive care. They are available for emergencies, car checks, general servicing, and scheduled bookings. Whether you need quick roadside assistance or want to plan ahead for regular maintenance, our mechanics can come directly to your location. Through ResqMe, you can easily locate and connect with the nearest trusted expert based on your geographical position, ensuring reliable help is always within reach.</p>
            </div>
           </div>
        </section>
        <section className="bg-white py-16 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-[rgb(139,0,0)] mb-4">
                    Car Washers
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Our car washers are trained and reliable professionals who take pride in giving your vehicle a spotless finish, wherever you are. You can schedule a wash in advance or request an on-the-go service at your convenience. Each washer is equipped with the right tools and eco-friendly cleaning products to ensure quality care. With location-based service, a trusted washer can come directly to your home, office, or any preferred spot.
                    </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <img src={wash} alt="car wash" className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"/>
                </div>
             </div>
      </section>

       <section className="bg-[rgb(255,245,245)] py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img src={tow} alt="towing service" className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"/>
          </div>
          <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[rgb(139,0,0)] mb-4">
                Towing Services</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                When your vehicle can't move, our towing team is ready to step in. We provide safe, efficient, and reliable towing services anytime,anywhere. Whether it's a breakdown, accident, or relocation, professional help is just a request away. Our drivers are trained to handle vehicles with care, ensuring smooth transportation to your preferred garage or destination. With ResqMe, you can easily track and contact the nearest towing service using your live location.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(139,0,0)] mb-4">
              Emergency Help</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              In moments of distress, ResqMe ensures that help is never out of reach. Our emergency support team connects you to immediate assistance — whether youre stranded, injured, or in need of urgent roadside aid. We respond promptly, prioritizing safety and care above all else. Using your live location, our system ensures
              that help finds you fast, wherever you are.</p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={emergency} alt="emergency help" className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"/>
          </div>
        </div>
      </section>

    <div className="relative bg-[rgb(255,245,245)] text-gray-800 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center gap-10">            
            <div className="md:w-1/2">
                <img src={inspection} alt="Pre-purchase inspection" className="rounded-2xl shadow-lg w-full object-cover h-[400px]"/>
            </div>

            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-[rgb(139,0,0)] mb-4">Pre-Purchase Inspection</h2>
                <p className="text-lg leading-relaxed">
                    Our Pre-Purchase Inspection service helps you make informed decisions before buying a vehicle. 
                    We connect you with certified professionals who perform comprehensive car evaluations like checking engine health, electrical systems, body condition, and safety features. 
                    Whether you're buying from a dealer or an individual, our inspectors ensure transparency and peace of mind by giving you a detailed report before you commit.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    You can book an inspection through ResqMe, and our experts will come to the seller's location to assess the car on your behalf. With our support, you,ll know exactly what you're getting, no surprises, just confidence in your purchase.
                </p>
            </div>

        </div>
        </>
    )
}