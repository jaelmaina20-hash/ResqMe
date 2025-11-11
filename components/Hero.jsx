export default function Hero () {
    return (
        <>
        <div className="text-center mt-12 text-[rgb(220,20,60)]">
            <p className="font-semibold text-2xl mb-7">Let's keep your car running.</p>
            <h2 className="font-bold text-6xl mb-10 text-[rgb(139,0,0)]">Stuck on the road or at home?</h2>
            <p className="font-semibold text-2xl">Get a mechanic anywhere with ResqMe.</p>
            <p className="font-semibold text-2xl mb-10">Keep it shining with our car washers.</p>
            
            <div className="flex flex-row justify-center mb-32 gap-4 p-3">
                <a href="/mechanics" className="bg-[rgb(139,0,60)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(255,0,0)] transition-all">Get a Mechanic</a>
                <a href="/carwashers" className="bg-[rgb(139,0,60)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(255,0,0)] transition-all">Get a Carwasher</a>
            </div>

        </div>
        </>
    )
}