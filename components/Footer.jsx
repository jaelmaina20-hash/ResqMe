import logo from "../src/assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';


export default function Footer () {

    return (
        <footer className="bg-[rgb(255,245,245)] text-[rgb(139,0,0)] border-t-4 border-[rgb(139,0,0)] py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
                <div className="space-y-3">
                    <img src={logo} alt="ResqMe Logo" className="w-30 h-20 shadow-md" />
                </div>
                {/* Quick Links */}
                <div>
                    <h4 className="text-[rgb(220,20,60)] font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-[rgb(255,69,58)] hover:underline transition-all duration-300 ease-in-out">Home</a></li>
                        <li><a href="/services" className="hover:text-[rgb(255,69,58)] hover:underline transition-all duration-300 ease-in-out">Our Services</a></li>
                        <li><a href="/mechanics" className="hover:text-[rgb(255,69,58)] hover:underline transition-all duration-300 ease-in-out">Mechanics</a></li>
                        <li><a href="/carwashers" className="hover:text-[rgb(255,69,58)] hover:underline transition-all duration-300 ease-in-out">Car Washers</a></li>
                        <li><a href="/contact" className="hover:text-[rgb(255,69,58)] hover:underline transition-all duration-300 ease-in-out">Contact Us</a></li>
                    </ul>
                </div> 
                {/* Social Links */}
                <div>
                    <h4 className="text-[rgb(220,20,60)] font-semibold mb-3 tracking-wide">Contact Info</h4>
                    <p className="text-sm mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faLocationPin} size="lg" style={{color: "#8b0000",}} /> Watermark Business Park, Karen, Nairobi</p>
                    <p className="text-sm mb-2 flex items-center gap-2"><FontAwesomeIcon icon={faPhoneVolume} /> +254 731 456 788</p>
                    <p className="text-sm mb-4 flex items-center gap-2"><a href="mailto:jaelmaina2.0@gmail.com" className="hover:underline"><FontAwesomeIcon icon={faEnvelope} /> jaelmaina2.0@gmail.com</a></p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com" target="_blank" className="hover:scale-110 transition-all duration-300 ease-in-out"></a>
                        <a href="https://www.instagram.com" target="_blank" className="hover:scale-110 transition-all duration-300 ease-in-out"></a>
                        <a href="https://www.whatsapp.com" target="_blank" className="hover:scale-110 transition-all duration-300 ease-in-out"></a>
                        <a href="https://www.tiktok.com" target="_blank" className="hover:scale-110 transition-all duration-300 ease-in-out"></a>
                    </div>
                    <div className="text-center mt-10 border-t border-[rgb(139,0,0)] pt-4 text-sm text-[rgb(139,0,0)]"> &copy; 2025 <span className="font-semibold text-[rgb(220,20,60)]">ResqMe</span>. All rights reserved.
                   </div>
                </div>
            </div>
        </footer>
    )
}
